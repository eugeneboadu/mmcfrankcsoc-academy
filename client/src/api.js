import axios from 'axios'

const API = axios.create({
  baseURL: 'https://mmcfrankcsoc-academy.onrender.com/api'
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
export const deleteMember = (id) => API.delete(`/members/${id}`)

export const loginAdmin = (credentials) => API.post('/auth/login', credentials)
export const getAdminProfile = () => API.get('/auth/profile')

export const getPublishedPosts = () => API.get('/posts/published')
export const getAllPosts = () => API.get('/posts')
export const createPost = (formData) => API.post('/posts', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
export const updatePost = (id, formData) => API.put(`/posts/${id}`, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
export const deletePost = (id) => API.delete(`/posts/${id}`)

export default API