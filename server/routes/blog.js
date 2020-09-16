const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog')

const authService = require('../services/auth')

router.post(
            '', 
            authService.checkJWT, 
            authService.checkRole('siteOwner'), 
            blogController.createBlog
        )

router.get('', blogController.getBlogs)

router.get(
    '/me',  
    authService.checkJWT, 
    authService.checkRole('siteOwner'), 
    blogController.getUserBlogs
)

router.get(
        '/:id',  
        blogController.getBlogById
    )

router.get('/s/:slug', blogController.getBlogBySlug)

router.patch(
        '/:id', 
        authService.checkJWT, 
        authService.checkRole('siteOwner'), 
        blogController.updateBlog
    )
 
router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), blogController.deleteBlog)

module.exports = router