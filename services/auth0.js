import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import { getCookieFromRequest } from '../helpers/utils'

const CLIENT_ID = process.env.CLIENT_ID

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // both domain and client ID come from auth0 application settings on the dashboard
      domain: 'dev-qo3dzhrn.auth0.com',
      clientID: CLIENT_ID,
      // redirectUri will replace the URL once you successfully log in
      redirectUri:`${process.env.BASE_URL}/callback`,
      responseType: 'token id_token',
      scope: 'openid profile'
    })
    
    // these 2 function call forces or binds the functions stated below to auth0.js' context. meaning function calls will only be handled in this file.
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.logout = this.logout.bind(this)

  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        console.log(authResult)
        if(authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          resolve()
        } else if (err) {
          reject(err)
          console.log(err)
        }
      })
    })
  }
  // this function handles in "cookies" or the things we need to store in order to for the app to remember that we're logged in.
  setSession(authResult) {
    // these 4 lines is im calling a function from JSON to give me a set time, and im storing strings into local storage given a name.
    const expiresAt = JSON.stringify((authResult.expiresIn * 2000) + new Date().getTime())

    Cookies.set('user', authResult.idTokenPayload)
    Cookies.set('jwt', authResult.idToken)
    Cookies.set('expiresAt', expiresAt)
  }

  logout(){
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')

    this.auth0.logout({
      returnTo: '',
      clientID: CLIENT_ID
    })
  }

  login() {
    this.auth0.authorize()
  }

  async getJWKS() {
    const res = await axios.get('https://dev-qo3dzhrn.auth0.com/.well-known/jwks.json')
    const jwks = res.data
    return jwks
  }

  async verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true })

      if(!decodedToken) { return undefined }

      const jwks = await this.getJWKS()
      const jwk = jwks.keys[0]

      // build certificate
      let cert = jwk.x5c[0]
      cert = cert.match(/.{1,64}/g).join('\n')
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`
    
      if(jwk.kid === decodedToken.header.kid){
        try {
          const verifiedToken = jwt.verify(token, cert)
          
          // this multiplier is to convert miliseconds to seconds
          const expiresAt = verifiedToken.exp * 1000

          return (verifiedToken && new Date().getTime() < expiresAt ) ? verifiedToken : undefined

        } catch(err){
          return undefined
        }
      }
    }

    return undefined
  }

  async clientAuth() {

    const token = Cookies.getJSON('jwt')
    const verifiedToken = await this.verifyToken(token)

    return verifiedToken
  }

  async serverAuth(req) {
    
    if(req.headers.cookie){

      

      const token = getCookieFromRequest(req, 'jwt')
      const verifiedToken = await this.verifyToken(token)

      return verifiedToken

    }

    return undefined
  }


}

const auth0Client = new Auth0()

export default auth0Client