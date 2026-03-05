import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

export const registerMember = (formData) => API.post('/members/register', formData)
export const getAllMembers = (status) => API.get(`/members${status ? `?status=${status}` : ''}`)
export const updateMemberStatus = (id, status) => API.put(`/members/${id}/status`, { status })

export const loginAdmin = (credentials) => API.post('/auth/login', credentials)
export const getAdminProfile = () => API.get('/auth/profile')

export const getPublishedPosts = () => API.get('/posts/published')
export const getAllPosts = () => API.get('/posts')
export const createPost = (postData) => API.post('/posts', postData)
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export default API