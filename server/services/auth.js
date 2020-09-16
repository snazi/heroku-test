var jwt = require('express-jwt')
// this call is the jwksClient, I just think its easier to call it RSA since that what I need it to do.
const jwksRSA = require('jwks-rsa');

// const namespace = 'http://localhost:3000/'

// middleware
exports.checkJWT = jwt({

    secret: jwksRSA.expressJwtSecret({
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        cache: true, // Default Value
        cacheMaxEntries: 5, // Default value
        // we took this from auth0.js in getJWKS()
        jwksUri: 'https://dev-qo3dzhrn.auth0.com/.well-known/jwks.json'
      })
    ,
    // audience = clientID
    audience: 'Tx1EtxPBuv2OriCqZikmha1p0hEFabHZ',
    // issuer = domain
    issuer: 'https://dev-qo3dzhrn.auth0.com/',
    algorithms: ['RS256']
  })

  exports.checkRole = (role) => (req, res, next) => {
      const user = req.user

      if( user && (user[process.env.NAMESPACE +'/role'] === role) ){
        next()
      } else {
        return res.status(401).send({ title: 'not authorized', desc: 'you are not authorized to access this data'})
      }
}
