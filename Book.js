let Books = class{
    constructor(id, title, author, year_written, edition, price) {
        this.id = id
        this.title = title
        this.author = author
        this.year_written = year_written
        this.edition = edition
        this.price = price
    }

    getId(){
        return this.id
    }
    getTitle(){
        return this.title
    }
    getAuthor(){
        return this.author
    }
    getYear(){
        return this.year_written
    }
    getEdition(){
        return this.edition
    }
    getPrice(){
        return this.price
    }
}
module.exports  = Books


