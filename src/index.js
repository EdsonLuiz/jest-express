require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { json } = require('express')

const mongodb = require('../mongodb/mongodb.connect')
const todoRotes = require('./routes/todo.routes')

mongodb.connect()

const app = express()
app.use(cors())
app.use(json())


app.use('/todos', todoRotes)

module.exports = app