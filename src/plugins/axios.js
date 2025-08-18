import axios from 'axios'

// Criar instância
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  timeout: 10000, // 10 segundos
})

// Interceptor de request (ex: token de autenticação)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Interceptor de response (ex: tratamento de erros globais)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Erro API:', error.response.status, error.response.data)
    } else {
      console.error('Erro de rede ou timeout:', error.message)
    }
    return Promise.reject(error)
  }
)

export default api
