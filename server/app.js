const express = require('express')
const mongoose = require('mongoose')

const Video = require('./models/Video.js')
 

// instance and port of the application
const app = express()
const port = process.env.PORT || 9000

// middlewares
app.use(express.json()) // body parser for json
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    next()
})

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

// api endpoints
app.get('/v1/posts', (req, res) => {
    res.status(200).send(data)
})

app.get('/v2/posts', (req, res) => {
    // not passing a first argument gets all data
    Video.find((err, data) => {
        err 
            ? res.status(500).send(err) // error occured on the server side
            : res.status(200).send(data) // get was successfull, 200 code and data is sent
    })
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Video.create(dbVideos, (err, data) => {
        err 
            ? res.status(500).send(err) // error occured on the server side
            : res.status(201).send(data) // post was successfull, 201 code and data is sent
    })
})

// update likes
app.put('/v2/like/:id', (req, res) => {
    console.log('put')
    // params: id of document, new body of document, callback
    Video.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        err 
            ? res.status(500).send(err)
            : res.status(201).send(data)
    })
})

// application listener
app.listen(port, () => {
    console.log(`listening on localhost ${port}`)
})