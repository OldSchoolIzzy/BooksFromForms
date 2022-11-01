const mysql = require('mysql')
const data = require('./books.json')
const books = data.books

const con = mysql.createConnection({
    host: "45.55.136.114",
    user: "kingsF2022",
    password: "kings_r_here!",
    database: "kingsF2022_israelHW"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query(
    //     `INSERT INTO books (id, title, author, year_written, edition, price) VALUES ?`,
    //     [books.map(book =>[book.id, book.title, book.author, book.year_written, book.edition, book.price])],
    //     (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             return;
    //         }
    //         console.log("success: ", res);
    //     }
    // );
});
module.exports = con;