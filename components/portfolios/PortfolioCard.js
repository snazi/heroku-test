import React from 'react'
import {  Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap'
import PortfolioCardDetail from './PortfolioCardDetail'
export default class PortfolioCard extends React.Component {

    constructor(props) {
        super()

        this.state = {
            isOpen: false
        }

        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { portfolio, children } = this.props
        const { isOpen } = this.state

        return (
             
                    <span onClick={this.modalToggle}>
                        <PortfolioCardDetail toggle={this.modalToggle} portfolio={portfolio} isOpen={isOpen}/>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                            <CardBody>
                                <p className="portfolio-card-city">{portfolio.location} </p>
                                <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                                <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                                <div className="readMore">
                                    {children}
                                </div>
                            </CardBody>
                            
                        </Card>
                    </span>
          
        )
    }
}