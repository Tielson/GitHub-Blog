import axios from 'axios'

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users/Tielson',
})
export const apiIssues = axios.create({
  baseURL: 'https://api.github.com/repos/Tielson',
})
