const axios = require('axios')

// creating an axios instance and making baseURL
const instance = axios.create({
    baseURL: 'http://localhost:9000'
})

export default instance