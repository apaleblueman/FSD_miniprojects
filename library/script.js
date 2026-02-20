const myLibrary = [];
function Book(name, author, pages, read) {
    if(!(new.target)){
        console.log("use new keyword when creating objects using constructor!");
        return;
    }
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function(){
    //     console.log(id, name, author, pages, read);
    // }
}
function addBookToLibrary(name, author, pages, read) {
  // take params, create a book then store it in the array
  let newbook = new Book(name, author, pages, read);
  myLibrary.push(newbook);
}


const contentWindow = document.getElementById('content');
function displayBooks(){
    contentWindow.innerHTML = "";
    myLibrary.forEach(bookObj => {
                
        // console.log(`Book ID${bookObj.id}`);
        const bookname = document.createElement("h1"); 
        const author = document.createElement("h2"); 
        const pages = document.createElement("p"); 
        const read = document.createElement("p");
        
        bookname.textContent = bookObj.name;
        author.textContent = bookObj.author;
        pages.textContent = bookObj.pages;
        read.textContent = bookObj.read;

        contentWindow.appendChild(bookname);
        contentWindow.appendChild(author);
        contentWindow.appendChild(pages);
        contentWindow.appendChild(read);

    });
}

document.getElementById('addbook').addEventListener('click', function(e){
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    // const name = "test";
    // const author = "test";
    // const pages = "test";
    // const read = "test";
    addBookToLibrary(name, author, pages, read);
    displayBooks();
    e.preventDefault();

})