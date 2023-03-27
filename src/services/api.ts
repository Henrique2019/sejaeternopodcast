import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.API_URL || 'http://capi.hrsolutions.com.br:3000/'
})
