import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios' 
// this link comes from routes.js
import {Link} from '../routes'
import BasePage from '../components/common/BasePage/BasePage'
// reacttrap imports for the card
import { Col, Row, Button} from 'reactstrap'
import PortfolioCard from '../components/portfolios/PortfolioCard'
import {getPortfolios, deletePortfolio} from '../actions'

import {Router} from '../routes'

export class Portfolios extends Component {

    static async getInitialProps() {
        let portfolios = []

        try{
            portfolios = await getPortfolios()
        }catch(err) {
            console.log(err)
        }

        return {portfolios}
    }

    navigateToEdit(portfolioId, e) {
        e.stopPropagation()
        Router.pushRoute(`/portfolios/${portfolioId}/edit`)
    }

    displayDeleteWarning(portfolioId, e) {
        e.stopPropagation()

        const isConfirmed = confirm('Are you sure you want to delete?')

        if(isConfirmed) {
            this.deletePortfolio(portfolioId)
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
            .then( () => {
                Router.pushRoute('/portfolios')
            })
            .catch( err => {
                console.error(err)
            })
    }

    renderPortfolios(portfolios) {
       const { isAuthenticated, isSiteOwner } = this.props.auth

        return portfolios.map( (portfolio,index) => {
            return (
                <Col key={index} md="4">
                    <PortfolioCard portfolio={portfolio}>
                    {isAuthenticated && isSiteOwner &&
                                <React.Fragment>
                                    <Button onClick={(e) => {
                                            e.stopPropagation()
                                            this.navigateToEdit(portfolio._id, e)}
                                        } 
                                        color="warning">
                                        Edit
                                    </Button>{' '}
                                    <Button onClick={ (e) => {
                                            e.stopPropagation()
                                            this.displayDeleteWarning(portfolio._id, e)
                                        }} 
                                        color="danger">
                                        Delete
                                    </Button>
                                </React.Fragment>
                            }
                    </PortfolioCard>
                </Col>

            )
        })
    }

    render() {
        
        const {portfolios} = this.props
        const { isAuthenticated, isSiteOwner } = this.props.auth
        return (
            <div> 
                <BaseLayout title="Angelo Amadora - Learn about my Career" {...this.props.auth}>
                    <BasePage className="portfolio-page" title="Portfolios">
                        {isAuthenticated && isSiteOwner &&
                            <Button onClick={()=> Router.pushRoute('/portfolios/new')} 
                                color="success" 
                                className="create-port-btn">
                                    Create Portfolio
                            </Button>
                        }
                        <Row>
                        {this.renderPortfolios(portfolios)}
                        </Row>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default Portfolios
