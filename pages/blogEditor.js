import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'
import SlateEditor from '../components/slate-editor/Editor'
import DynamicEditor from  '../components/slate-editor/DynamicEditor'
import RichText from '../components/slate-editor/RichText'
import {saveBlog, createBlog} from '../actions'

import { Router } from '../routes'

export class BlogEditor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isSaving: false,
            lockId: Math.floor(1000 + Math.random() * 9000)
        }
        this.saveBlog = this.saveBlog.bind(this)
    }

    saveBlog(heading, story) {
        const { lockId } = this.state
        const blog = {}
        blog.title = heading.title
        blog.subTitle = heading.subtitle
        blog.story = story

        this.setState({ isSaving: true })

        createBlog(blog, lockId).then( createdBlog => {
            this.setState({ isSaving: false })
            Router.pushRoute(`/blogs/${createdBlog._id}/edit`)
        }).catch(err => {
            this.setState({ isSaving: false })
            const message = err.message|| 'Server Error!'
            console.error(message)
        })
    }
    

    render() {
        const { isSaving } = this.state
        return (
            <div>
            {/* we destructured auth props using this notation and passed it as a props to BaseLayout */}
                <BaseLayout {...this.props.auth}>
                    <BasePage containerClass="editor-wrapper" className="blog-editor-page">
                        {/* <SlateEditor /> */}
                        <RichText save={this.saveBlog} isSaving={isSaving}/>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default withAuth('siteOwner')(BlogEditor)
