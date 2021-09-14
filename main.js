                        // New Book Button 
let container = document.querySelector('.container')
let books = JSON.parse(localStorage.getItem("myLibrary")) || [];
const bookshelf = document.querySelector(".bookshelf");
let form = document.querySelector('form')
                        

document.getElementById('addNewBook').addEventListener('click', function() {
    document.querySelector('.bg-model').style.display = 'flex';
    
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-model').style.display = 'none';
    
});

                        // Form Submission 

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    
};

function updateLocal(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

var prevent = function(){
    var form = document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
  })
  } 
  prevent();

function close() {
    document.querySelector('.bg-model').style.display = 'none';
    
};

document.querySelector('.submitBookInfo').addEventListener('click', function() {
    addBook();
});


function addBook(i) {
    let bookNode = document.createElement("div");
    bookNode.classList.add("book");
    bookNode.setAttribute("data-index", `${i}`);
  
    const title = document.querySelector('#title').value;
    let titleNode = document.createElement("h2");
    titleNode.innerHTML = `Title: ${title}`;
  
    const author = document.querySelector('#author').value;
    let authorNode = document.createElement("h3");
    authorNode.innerHTML = `Author: ${author}`;
  
    const pages = parseInt(document.querySelector('#pages').value);
    let pageNode = document.createElement("h3");
    pageNode.innerHTML = `Pages: ${pages}`;
  
    const read = document.querySelector('.read');
    let readNode = document.createElement("h3");
    readNode.innerHTML = `Read? ${read === "Yes" ? "😃" : "😢"}`;
  
    let updateNode = document.createElement("button");
    updateNode.classList = "update";
    updateNode.innerHTML = 'UPDATE'
  
    let trashNode = document.createElement("button");
    trashNode.classList = "trash";
    trashNode.innerHTML = "DELETE"
  
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(books));
    bookNode.appendChild(titleNode);
    bookNode.appendChild(authorNode);
    bookNode.appendChild(pageNode);
    bookNode.appendChild(readNode);
    bookNode.appendChild(updateNode);
    bookNode.appendChild(trashNode);
    bookshelf.appendChild(bookNode);
    close()
    form.reset();

    // update book status
  updateNode.addEventListener("click", () => {
    if (readNode.innerHTML === "Read? No😢") {
      readNode.innerHTML = "Read? Yes😃";
      book.read = "Yes";
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      readNode.innerHTML = "Read? No😢";
      book.read = "No";
      localStorage.setItem("books", JSON.stringify(books));
    }
  });
  // delete book
  trashNode.addEventListener("click", () => {
    bookshelf.removeChild(bookNode);
    myLibrary.splice(bookNode, 1);
    localStorage.setItem("books", JSON.stringify(myLibrary));
  });
};

  

