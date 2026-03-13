import api from './api'

export const loginUser = (data: any) => {
  return api.post('/auth/login', data)
}

export const signupUser = (data: any) => {
  return api.post('/auth/signup', data)
}
