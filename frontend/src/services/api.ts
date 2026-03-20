import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'http://13.235.243.35:3000/api',
  withCredentials: true,
})

// 🔥 REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  // console.log(token)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// 🔥 Response interceptor (optional)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.log('Unauthorized → redirect to login')
      // optional:
      // window.location.href = "/login";
    }
    return Promise.reject(err)
  }
)

export default api
