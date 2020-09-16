import React, { Component } from 'react'
import Header from '../components/common/Header/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/common/BasePage/BasePage'

import withAuth from '../components/hoc/withAuth'
import SlateEditor from '../components/slate-editor/Editor'
import DynamicEditor from  '../components/slate-editor/DynamicEditor'
import RichText from '../components/slate-editor/RichText'
import { updateBlog, getBlogById } from '../actions'
import { toast } from 'react-toastify'

export class BlogEditorUpdate extends Component {

    static async getInitialProps({query}) {
        const blogId = query.id 
        let blog = {}

        try {
            blog = await getBlogById(blogId)
            
        } catch(err) {
            console.error(err)
        }

        return {blog}
    }

    constructor(props) {
        super(props)

        this.state = {
            isSaving: false
        }
        
        this.updateBlog = this.updateBlog.bind(this)
    }

    updateBlog(heading, story) {
        const{blog} =  this.props
        const updatedBlog = {}
        updatedBlog.title = heading.title
        updatedBlog.subTitle = heading.subtitle
        updatedBlog.story = story

        this.setState({ isSaving: true })

        updateBlog(updatedBlog, blog._id).then( updatedBlog => {
            toast.success('Blog Saved Successfully')
            this.setState({ isSaving: false })
        }).catch(err => {
            this.setState({ isSaving: false })
            const message = err.message|| 'Server Error!'
            toast.error(message)
            console.error(message)
        })
    }
    
    

    render() {
        const { blog } =  this.props
        console.log(blog)
        const { isSaving } = this.state
        return (
            <div>
            {/* we destructured auth props using this notation and passed it as a props to BaseLayout */}
                <BaseLayout {...this.props.auth}>
                    <BasePage containerClass="editor-wrapper" className="blog-editor-page">
                        {/* <SlateEditor /> */}
                        <RichText initialValue={blog.story} save={this.updateBlog} isSaving={isSaving}/>
                    </BasePage>
                </BaseLayout>
            </div>
        )
    }
}

export default withAuth('siteOwner')(BlogEditorUpdate)
