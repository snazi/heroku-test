import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'

import { getSecretData, getSecretDataServer } from '../actions'

export class Secret extends Component {

    static async getInitialProps({req}) {
        const anotherSecretData = await getSecretData(req)
        
        console.log(anotherSecretData)

        return { anotherSecretData }
    }

    constructor(props) {
        super()

        this.state = {
            secretData: []
        }
    }

    async componentDidMount() {
        const secretData = await getSecretData()

        this.setState({
            secretData
        })
    }

    displaySecretData() {
        const { secretData } = this.state

        if(secretData && secretData.length > 0){
            return secretData.map((data,index) => {
                return (
                    <div key={index}>
                        <a>{data.title}</a>
                        <a>{data.description}</a>
                    </div>
                )
            })
        }

        return null

    }

    render() {
        debugger
        const { superSecret } = this.props
        return (
                 <div>
                     <BaseLayout {...this.props.auth}>
                         <BasePage>
                         <h1>I am Secret Page</h1>
                             <p>Some secret content heere</p>
                             <h2>{superSecret}</h2>
                             {this.displaySecretData()}
                       </BasePage>
                    </BaseLayout>
                 </div>
        )
    }
}

export default withAuth()(Secret)