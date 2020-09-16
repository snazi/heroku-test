import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'reactstrap';

import Typed from 'react-typed';

export class Index extends Component {

    // constructor will be called first
    constructor(props) {
        super(props)
        this.state = {
            isFlipping: false
        }
        
        // array to be displayed in the typed animation
        this.roles = ['Developer','Project Manager', 'Tech Enthusiast', 'Team Player', 'React JS', 'React Native']
        
    }

    componentDidMount() {
        this.animateCard()
    }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval)
    }

    animateCard() {
        this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping : !this.state.isFlipping
            })
        }, 30000)
    }

    // then 2nd to be called is render()
    render() {
        // passed this in _app.js. Destructurize it
       const { isAuthenticated, user } = this.props.auth
       const { isFlipping } = this.state
        return (
            <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType="index"
                        title="Angelo Amadora - Portfolio">
                <div className="main-section">
                    <div className="background-image">
                        <img  className="img-styling" src="" />
                    </div>

                    <Container>
                    <Row>
                        <Col md="6">
                        <div className="hero-section">
                            <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                            <div className="front">
                                <div className="hero-section-content">
                                <h2> Full Stack Web Developer </h2>
                                <div className="hero-section-content-intro">
                                    Have a look at my portfolio and job history.
                                </div>
                                </div>
                                <img className="image" src="/images/section-1.png"/>
                                <div className="shadow-custom">
                                <div className="shadow-inner"> </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="hero-section-content">
                                <h2> Get Your Projects done with me. </h2>
                                <div className="hero-section-content-intro">
                                    Professional Quality outputs.
                                </div>
                                </div>
                                <img className="image" src="/images/section-2.png"/>
                                <div className="shadow-custom shadow-custom-2">
                                <div className="shadow-inner"> </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                        <div className="hero-welcome-text">
                            <h1>
                            { isAuthenticated && <span> <b>{user.name}</b> </span> }
                            Welcome to the portfolio website of Angelo Amadora.
                            Get informed, collaborate and discover projects I was working on through the years!
                            </h1>
                        </div>
                        {/* this div shows the typed animations you can check the API for explanations on each of the properties */}
                        <div>
                            <Typed
                            loop
                            typeSpeed={60}
                            backSpeed={30}
                            strings={this.roles}
                            smartBackspace
                            shuffle={false}
                            backDelay={1000}        
                            showCursor
                            cursorChar="|"
                            className="self-typed"
                            />
                        </div>
                        <div className="hero-welcome-bio">
                            <h1>
                            Let's take a look on my work.
                            </h1>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </BaseLayout>

        )
    }
}

export default Index