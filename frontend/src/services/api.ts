import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'http://13.235.243.35:3000/api',
  withCredentials: true,
})

export default api
