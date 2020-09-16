import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios'
import BasePage from '../components/common/BasePage/BasePage'


export class portfolio extends Component {
    // due to changes in latest Next.js code, old code does not account that querry gets lost.
    // usiong getInitial props allows us to let this component know that we have a query.
  
    // one of the differences between getInitialProps and the one below is that 
    static async getInitialProps({query}) {
        console.log(query)
        const portfolioId = query.id
        let portfolio = {}
        console.log('hah')
        try{

            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + portfolioId)
            portfolio = response.data
           
            console.log(portfolio)
        }catch(error) {
            console.error(error)
        }


        return {portfolio}
    }

    componentDidMount() {
        const html = '...'
        const document = new DOMParser().parseFromString(html, 'text/html')
        console.log(document)
    }

    render() {
       
        const { portfolio } = this.props
        console.log(portfolio)
        
        return (
            <div>
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <p>{portfolio.title}</p>
                        <p>{portfolio.body}</p>
                        <p>{portfolio.id}</p>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

// in the docs you will find that the page needs to be surrounded with the withRouter() however we can also do this syntax in order to export the whole component wrapped inside withRouter()
export default withRouter(portfolio)
