const express = require('express')
const cors = require('cors')
const { json } = require('express')

const todoRotes = require('./routes/todo.routes')


const app = express()
app.use(cors())
app.use(json())


app.use('/todos', todoRotes)

module.exports = app