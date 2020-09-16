import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'
import {Row, Col} from 'reactstrap'

export class Cv extends Component {
    render() {
        return (
            <div>
                <BaseLayout {...this.props.auth}>
                    <BasePage title="Get My CV" className="cv-page">
                        <Row>
                            <Col md={{size: 8, offset: 2}}>
                                <div className="cv-title">
                                    <a download="Amadora_Angelo_Resume.pdf" className="btn btn-success" href="../Amadora_Angelo_Resume.pdf">
                                        Download
                                    </a>
                                </div>
                                <iframe style={{width: '100%', height: '800px'}} src="../Amadora_Angelo_Resume.pdf">

                                </iframe>
                            </Col>
                        </Row>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default Cv
