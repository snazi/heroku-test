import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'

export class Owner extends Component {
    render() {
        return (
            <div>
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>I am Owner page</h1>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default withAuth('siteOwner')(Owner)
