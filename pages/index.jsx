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
                    
                </div>
            </BaseLayout>

        )
    }
}

export default Index