import Videos from './models/Video.js'

const express = require('express')
const mongoose = require('mongoose')
 

// instance and port of the application
const app = express()
const port = 9000

// middlewares

// DB config
const connectionURL = 'mongodb://localhost/tiktokDB'
mongoose.connect(connectionURL, {
    usenewURLParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

// check db connection
db.once('open', () => {
    console.log(`connected to ${connectionURL}`)
})

// check for db errors
db.on('error', () => {
    console.log(err)
})

// health check
app.get('/', (req, res) => {
    res.status(200).send('server is running')
})

// api endlpoints
app.get('/v1/posts', (req, res) => {
    res.status(200).send(data)
})

// application listener
app.listen(port, () => {
    console.log(`listening on localhost ${port}`)
})