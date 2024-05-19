import axios from 'axios'

const baseUrl = '/api'

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
