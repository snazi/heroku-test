import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import auth0Client from '../services/auth0'
import {withRouter} from 'next/router'
// this page is for the /callback url, this is the page that will be generated.
export class Callback extends Component {

    async componentDidMount() {
        await auth0Client.handleAuthentication()
        this.props.router.push('/')
    }

    render() {
        return (
            <div>
                <BaseLayout>
                    <BasePage>
                        <h1>You are loggin in...</h1>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default withRouter(Callback)
