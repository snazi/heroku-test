import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import BasePage from '../common/BasePage/BasePage'

// const namespace = 'http://localhost:3000/'

export default (role) => {
    return (Component) => {
        return class withAuth extends React.Component {
        
            static async getInitialProps(args) {
                // this "waits" a check of the componentbeing passed down if it has getInitialProps and execute it
                const pageProps = await Component.getInitialProps && await Component.getInitialProps(args)
                // destructurize the pageprops as a "prop" if we did not destructurize it we'd be passing a pageProps outside of a
                return { ...pageProps }
            }
    
            renderProtectedPage() {
                
                const { isAuthenticated, user } = this.props.auth
                const userRole = user && user [`${process.env.NAMESPACE}/role`]
    
                let isAuthorized = false
    
                if(role){
                    if( userRole && userRole === role ) 
                        isAuthorized = true
                }else {
                    isAuthorized = true
                }
    
                if(!isAuthenticated){
                    return(
                        <div>
                            <BaseLayout {...this.props.auth}>
                                <BasePage>
                                    <h1>You're not isAuthenticated, please log in to access this page</h1>
                                </BasePage>
                            </BaseLayout>
                        </div>
                        )
                } else if(!isAuthorized) {
                    return(
                        <div>
                            <BaseLayout {...this.props.auth}>
                                <BasePage>
                                    <h1>You're not Authroized, you dont have permission to access this page</h1>
                                </BasePage>
                            </BaseLayout>
                        </div>
                        )
                } else {
                    return ( <Component {...this.props}/> )
                }
    
            }
    
            render() {
               
                return this.renderProtectedPage()
            }
        }
    }
}
