/* express, pug, and bootstrap have been installed already */
const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require('body-parser')
const fs = require('fs')

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(express.json())
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))

app.get('/form', function (req, res){
    let data = getBooksData();
    let books = data.books
    res.render('form', {
        library: data.library,
        description: data.description,
        books
    })
})

app.get('/showBook', function (req, res){
    let data = getBooksData();
    let books = data.books
    res.render('showBook', {
        bookID: req.query.books,
        books: books
    })
})

app.get('/showAll', function (req, res){
    let data = getBooksData();
    let books = data.books
    res.render('showAll', {
        books
    })
})


app.get('/delete/:id', (req, res) =>{
    const id = req.params.id
    let data = getBooksData();
    let books = data.books

    const filterBook = books.filter( book => book.id !== id )
    if ( data.length === filterBook.length ) {
        return res.status(409).send({error: true, msg: 'does not exist'})
    }
    //save the filtered data
    saveBooksData(filterBook)
    //res.send({success: true, msg: 'removed successfully'})
    res.redirect("/showAll")
})

let port = 3002
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

const getBooksData = () => {
    const jsonData = fs.readFileSync('books.json')
    return JSON.parse(jsonData)
}
const saveBooksData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('books.json', stringifyData)
}