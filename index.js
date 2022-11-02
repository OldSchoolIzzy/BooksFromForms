/* express, pug, and bootstrap have been installed already */
const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require('body-parser')
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(express.json())
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))

let Books = require('./Book')
let arrayOfBooks = []
const data = require('./books.json')
const books = data.books
books.forEach((book)=>{
    arrayOfBooks.push(new Books(book.id, book.title, book.author, book.year_written, book.edition, book.price))
})

app.get('/form', function (req, res){
    let objects = arrayOfBooks;
    res.render('form', {
        library: data.library,
        description: data.description,
        objects
    })
})

app.get('/showBook', function (req, res){
    res.render('showBook', {
        bookID: req.query.books,
        objects: arrayOfBooks
    })
})

app.get('/showAll', function (req, res){
    res.render('showAll', {
        objects : arrayOfBooks
    })
})


app.get('/delete/:id', (req, res) =>{
    const id = req.params.id
    arrayOfBooks =  arrayOfBooks.filter((book)=> book.id !== id)
    res.redirect("/showAll")
})

let port = 3002
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
