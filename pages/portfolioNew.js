import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'

import PortfolioCreateFrom from '../components/portfolios/PortfolioCreateFrom'
import { Row, Col } from 'reactstrap'

import { createPortfolio } from '../actions'

import { Router } from '../routes'

import moment from 'moment'

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    position: '',
    description: '',
    startDate: moment(),
    endDate: moment()
  }

export class portfolioNew extends Component {

    constructor(props) {
        super()

        this.state = {
            error: undefined
        }

        this.savePortfolio = this.savePortfolio.bind(this)
    }

    savePortfolio(portfolioData , {setSubmitting}) {
        // alert(JSON.stringify(portfolioData, null, 2));
        setSubmitting(true)
        createPortfolio(portfolioData).then( (portfolio) => {
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
        return (
            <div>
            {/* we destructured auth props using this notation and passed it as a props to BaseLayout */}
                <BaseLayout {...this.props.auth}>
                    <BasePage className="portfolio-create-page" title="Create New Portfolio">
                        <Row>
                            <Col md="6">
                                <PortfolioCreateFrom initialValues={INITIAL_VALUES} error={error} onSubmit={this.savePortfolio}/>
                            </Col>
                        </Row>
                    </BasePage> 
                </BaseLayout>
            </div>
        )
    }
}

export default withAuth('siteOwner')(portfolioNew)
