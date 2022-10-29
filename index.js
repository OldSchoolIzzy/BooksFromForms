/* express, pug, and bootstrap have been installed already */
const express = require('express')
const app = express()
const data = require('./books.json')
const path = require("path");
app.use(express.static("public"))
const books = data.books
let port = 3002

app.set('view engine', 'pug')
app.use(express.static('public'))

// need this to use bootstrap
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))

app.get('/form', function (req, res){
    res.render('form', {
        books
    })
})
app.get('/showBook', function (req, res){
    res.render('showBook', {
        books,
        bookID: req.query.books
    })
})
app.get('/showAll', function (req, res){
    res.render('showAll', {
        books
    })
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})