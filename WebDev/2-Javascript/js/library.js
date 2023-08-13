// task 1
class Book {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

// task 2
const library = {
    books: [],
    addBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        console.log(`A new book called ${book.title} by ${book.author} is now added to the library. The number of books that the library has is now: ${this.books.length}`);
    },
    checkOutBook(title) {
        // task 4
        try {
            let found = false;
            for (let book of this.books) {
                if (book.title === title && book.available) {
                    book.avaiable = false;
                    found = true;
                    console.log(`The book ${book.title} has been taken out, and is no longer available.`);
                    break;
                } else if (book.title === title && !book.available) {
                    console.log(`The book ${book.title} is already taken out by another library patron.`);
                    found = true;
                    break;
                }
            }
            if (!found) {
                throw new Error(`The book ${title} is not found within the library.`);
            }
        } catch(e) {
            console.log(e.message);
        }
    },
    getAvailableBooks() {
        let stock = [];
        for (let book of this.books) {
            if (book.isAvailable) {
                stock.push(book.title);
            }
        }
        console.log(`There are currently ${stock.length} left. The available books are as follows: \n\n${stock.join(', ')}`)
    }
}

// task 3
const newBooks = `[
    {"title":"Green Eggs And Ham","author":"Dr. Seuss"},
    {"title":"The Cat In The Hat","author":"Dr. Seuss"},
    {"title":"Oh, the Places You'll Go!","author":"Dr. Seuss"}
]`;

function receiveBooks(newBookEntry) {
    console.log('The library has more books!');
    const newBooks = JSON.parse(newBookEntry);
    for (let books of newBooks) {
        library.addBook(books.title, books.author);
    }
}

console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.checkOutBook("Green Eggs And Ham");
library.getAvailableBooks();