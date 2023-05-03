const express = require('express')

const Book = require('./src/controllers/books.controller')

const app = express()

app.use(express.json())

app.get('/books', Book.getAll)
app.get('/books/:id', Book.getById)
app.post('/books', Book.createBook)
app.put('/books/:id',Book.updateBook)

module.exports = app