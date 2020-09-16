import axios from 'axios'
import Cookies from 'js-cookie'
import { getCookieFromRequest } from '../helpers/utils'




const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_URL}/api/v1`,
    timeout: 3000
})

const setAuthHeader = (req) => {
    const token = req ? getCookieFromRequest(req,'jwt') : Cookies.getJSON('jwt')

    if(token) {
        return {headers: {'authorization': `Bearer ${token}`}}
    }

    return undefined
}

const rejectPromise = (resError) => {
    let error = {}

    if(resError && resError.response && resError.response.data) {
        error = resError.response.data
    } else {
        error = resError
    }

    return Promise.reject(error)
}

export const getSecretData = async (req) => {

    const url = req ? '/secret' : '/api/v1/secret'

    return await axiosInstance.get(url, setAuthHeader(req) ).then( response => response.data )
}

// export const getSecretDataServer = async (req) => {
//     return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req) ).then( response => response.data )
// }

export const getPortfolios = async () => {
    const url =  '/portfolios'

    return await axiosInstance.get(url).then( response => response.data )
}

export const createPortfolio = async (portfolioData) => {
    const url =  '/portfolios'

    return await axiosInstance.post(url, portfolioData, setAuthHeader()).then( response => response.data )
    .catch(error => {return rejectPromise(error)})
}

export const getPortfolioById = async (id) => {
    return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data)
}

export const updatePortfolio = async (portfolioData) => {
    const url =  `/portfolios/${portfolioData._id}`

    return await axiosInstance.patch(url, portfolioData, setAuthHeader())
    .then( response => response.data )
    .catch(error => {
        return rejectPromise(error)
    })
}

export const deletePortfolio = (id) => {
    return axiosInstance.delete(`/portfolios/${id}`, setAuthHeader())
        .then( response => response.data )
}

// BLOG ACTIONS
export const getBlogs = async (req) => {
    return await axiosInstance.get('/blogs').then(response => response.data)
}

export const getBlogBySlug = async (slug) => {
    return await axiosInstance.get(`/blogs/s/${slug}`).then(response => response.data)
}

export const getUserBlogs = async (req) => {
    return await axiosInstance.get('/blogs/me', setAuthHeader(req)).then(response => response.data)
}

export const saveBlog = (blogData) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Promise Resolved!')
        }, 1000)
    })
}

export const createBlog = (blogData, lockId) => {
    return axiosInstance.post(`/blogs?lockId=${lockId}`, blogData, setAuthHeader())
            .then(response => response.data)
            .catch(err => rejectPromise(err))
}

export const getBlogById = async (id) => {
    return await axiosInstance.get(`/blogs/${id}`).then(response => response.data)
}

export const updateBlog = async (blogData, blogId) => {
    return axiosInstance.patch(`/blogs/${blogId}`, blogData, setAuthHeader())
            .then(response => response.data)
            .catch(err => rejectPromise(err))
}

export const deleteBlog = (blogId) => {
    return axiosInstance.delete(`/blogs/${blogId}`, setAuthHeader())
            .then(response => response.data)
            .catch(err => rejectPromise(err))
}