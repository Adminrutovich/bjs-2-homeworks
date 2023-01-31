class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state, type) { 
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() { 
        this.state = this.state * 1.5;
    }
    set state(newState) {
        if (newState < 0) {
            this.state = 0;
        } 
        else if (newState > 100) {
            this._state = 100;
        } 
        else {
            this._state = newState;
        }
    } 
        get state() {
            return this._state;
        }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.author = author;
        this.type = "book";
    }
}
  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

class Library {

    constructor(name, books) { 
        this.name = name;
        this.books = [];
    }
    addBook(book) { 
        if (this.state > 30) {
            this.books.push(book);
        } 
    }
    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if(book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        if(book != null) {
        let index = this.books.indexOf(book);
        if (index > 0) {
            this.books.splice(index, 1);
        }
        return book;
        }
        else {
        return null;
       }
    }
}

class Student {
    constructor (name) {
      this.name = name;
      this.marks = {};
    }
}