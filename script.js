class Book{
    constructor(title, author, pages,  status){
    this.title = title
    this.author = author 
    this.pages = pages
    this.status = status
    }
}

class UI {
    static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book)); 

} // displayBooks closure

   static addBookToList(book){
       const list = document.querySelector("#book-list"); 
       
       const row = document.createElement('tr');
       row.innerHTML = `
       <td>${book.title}</td> 
       <td>${book.author}</td> 
       <td>${book.pages}</td> 
       <td>${book.status}</td>
       <td><a href="#" class="delete">X</a></td>
       `; 

       list.appendChild(row); 
   } 

   static deleteBook(el){
       if(el.classList.contains("delete")){
           el.parentElement.parentElement.remove();
       }
   }

   static showAlert(message, className){
       const div = document.createElement("div"); 
       div.className = `alert alert-${className}`;
       div.appendChild(document.createTextNode(message)); 
       const container = document.querySelector(".container"); 
       const form = document.querySelector("#book-form"); 
       container.insertBefore(div, form);  

       //Vanish in 3 sec 
       setTimeout(() => document.querySelector(".alert").remove(), 500);
   }

   static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#status").value;

   }
}

class Store {
    static getBooks(){
        let books; 
        if(localStorage.getItem("books") === null){
            books = []; 
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books; 
    }

    static addBook(book){
        const books = Store.getBooks(); 
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books)); 
    }
    
    static removeBook(title){
        const books = Store.getBooks(); 
        books.forEach((book, index)=> {
            if(book.title === title){
                books.splice(index,1); 
            }
        }); 
    
    localStorage.setItem("books", JSON.stringify(books)); 
    }
}
//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#book-form").addEventListener("submit", (e)=>{
  e.preventDefault();  
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("#status").value;

   //Validate
   if(title ==="" || author === "" || pages ===""){
       UI.showAlert("Please fill in all fields");
   } else {
   // Add Book
    const book = new Book(title, author, pages, status); 

    // Add Book to UI
    UI.addBookToList(book); 

    //Add book to store 
    Store.addBook(book); 

    //Validate book added 
    UI.showAlert("Book Added", "Success");

    //Clear fields 
    UI.clearFields();
   }
}); 

//Delete a Book 
document.querySelector("#book-list").addEventListener("click", (e) => {
    //remove book from UI
    UI.deleteBook(e.target);
    //remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent); 
})


