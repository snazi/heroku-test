import React from 'react'
import App, {Container} from 'next/app'
import auth0 from '../services/auth0'
import Fonts from '../helpers/Fonts'

//styling
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/common/styles/main.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// TODO: once finished with entire project, use the current implementation, this is depcrated.
// const namespace = 'http://localhost:3000'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {

        let pageProps = {}

        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req)
        
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }

        let isAuthenticated = false
        if(user){
            isAuthenticated = true
        }

        const isSiteOwner = user && user[process.env.NAMESPACE+'/role'] === 'siteOwner'

        // now that we've managed to give auth details to both client and server side, we should pass the auth data to our pages
        const auth = { user, isAuthenticated: !!user, isSiteOwner  }

        // return auth as well as page props
        return { pageProps, auth }
    }

    componentDidMount() {
        Fonts()
    }

    render() {
        // pass it along
        const { Component, pageProps, auth } = this.props
        // create an auth prop and pass this current instance of auth.
        return (
            <Container>
                <ToastContainer />
                <Component {...pageProps } auth={auth} />
            </Container>
        )
    }
}