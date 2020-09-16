import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'

import PortfolioCreateFrom from '../components/portfolios/PortfolioCreateFrom'
import { Row, Col } from 'reactstrap'

import { getPortfolioById, updatePortfolio } from '../actions'

import { Router } from '../routes'

export class portfolioEdit extends Component {

    static async getInitialProps({query}) {
        let portfolio = {}
        try {
            portfolio = await getPortfolioById(query.id)
        } catch(error) {
            console.log(err)
        }
       
        return {portfolio}
    } 

    // static async getStaticProps() {

    // }

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.updatePortfolio = this.updatePortfolio.bind(this)
    }

    updatePortfolio(portfolioData , {setSubmitting}) {
        alert(JSON.stringify(portfolioData, null, 2));
        setSubmitting(true)
        updatePortfolio(portfolioData).then( (portfolio) => {
            setSubmitting(false)
            console.log(portfolio)
            this.setState({error: undefined})
            Router.pushRoute('/portfolios')
        }).catch( (err) => {
            
            const error = err.message || "Server Error!"
            setSubmitting(false)
            this.setState({error: err.message})
            
        })
    }

    render() {
        const {error} = this.state
        const { portfolio } = this.props
        return (
            <div>
            {/* we destructured auth props using this notation and passed it as a props to BaseLayout */}
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Update Portfolio">
                        <Row>
                            <Col md="6">
                                <PortfolioCreateFrom initialValues={portfolio} error={error} onSubmit={this.updatePortfolio}/>
                            </Col>
                        </Row>
                    </BasePage> 
                </BaseLayout>
            </div>
        )
    }
}

export default withAuth('siteOwner')(portfolioEdit)
