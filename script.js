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

function findBook(array, title){
    if(array.length === 0 || array.length === null){
        return;
    }
    for(book of array)
        if(book.title === title){
            return array.indexOf(book);
        }
}

function removeBook(book){
    const deletebook = findBook(book);
    myLibrary.splice(deletebook)
}
addNewBook("Harry Potter", "j.k roling", 27, false);
addNewBook("The Lord of the rings", "j.k roling", 27, false);
addNewBook("The man in the high castle", "j.k roling", 27, false);
console.log(myLibrary);

console.log(findBook(myLibrary, "The Lord of the rings"));
