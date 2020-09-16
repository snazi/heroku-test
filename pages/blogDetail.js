import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'
import {getBlogBySlug} from '../actions'
import { Col, Row } from 'reactstrap'

export class BlogDetail extends Component {

    static async getInitialProps({query}) {
        let blog = {}
        const slug = query.slug

        try{
            blog = await getBlogBySlug(slug)
        } catch(err) {
            console.error(err)
        }

        return {blog}
    }

    render() {
        const {blog} = this.props
        console.log(blog)
        return (
            <div>
            {/* we destructured auth props using this notation and passed it as a props to BaseLayout */}
                <BaseLayout {...this.props.auth}>
                    <BasePage className="blog-detail-page" title={blog.title}>
                        <Row>
                            <Col md={{ size: 8, offset: 2 }}>
                               <div dangerouslySetInnerHTML={{ __html: blog.story}}></div>
                            </Col>
                        </Row>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default BlogDetail
