const express = require('express')
const mongoose = require('mongoose')
const searchRoute = require('./Routes/searchRoute')

const app = express()
const cors = require('cors')

const dburl =
  'mongodb+srv://masood:MasoodAhmadi123@cluster0.auyob.mongodb.net/reindeer?retryWrites=true&w=majority'

const db_connect = mongoose.connect(dburl, { useNewUrlParser: true })

app.use(cors({ origin: 'http://localhost:3002' }))
app.use(express.json())

app.use('/search', searchRoute)

app.listen(9000, () => console.log('Server Listening on Port 9000'))
