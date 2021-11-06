let myLibrary = []; 

function Book(title, author, pages, read){
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read 
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, Read: ${read}`;
    }
}


const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "No"); 

console.log(theHobbit.info());

