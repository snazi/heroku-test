// taken from next-routes readme
const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('portfolioNew', '/portfolios/new') 
.add('portfolio', '/portfolio/:id')                 // portfolio   portfolio.js      /blog/:slug
.add('portfolioEdit', '/portfolios/:id/edit')
.add('userBlogs', '/blogs/dashboard')
.add('blogEditor', '/blogs/new')
.add('blogDetail', '/blogs/:slug')
.add('blogEditorUpdate', '/blogs/:id/edit')