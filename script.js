let myLibrary = []; 

class Book{
    constructor(title, author, pages,  status){
    this.title = title
    this.author = author 
    this.pages = pages
    this.status = status
    }
}

function addNewBook(title, author, pages, status){
        myLibrary.push(new Book(title, author, pages, status));
}
console.log(myLibrary);
addNewBook("Harry Potter", "j.k roling", 27, false);
console.log(myLibrary);