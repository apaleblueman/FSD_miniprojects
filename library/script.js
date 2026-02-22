let myLibrary = [];
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
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute('id', bookObj.id);
        const bookname = document.createElement("h1"); 
        const author = document.createElement("h3"); 
        const pages = document.createElement("span"); 
        const read = document.createElement("span");
        const remove = document.createElement("button");
        const icon = document.createElement("img");
        icon.setAttribute("src", "./delete.svg");
        remove.className = "delete";
        // remove.id = 'delete';
        remove.setAttribute("id", "delete");

        remove.appendChild(icon);

        bookname.textContent = bookObj.name;
        author.textContent = bookObj.author;
        pages.textContent = bookObj.pages;
        read.textContent = bookObj.read;

        card.appendChild(bookname);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);
        contentWindow.appendChild(card)
        
        icon.addEventListener('click', function(){
            myLibrary = myLibrary.filter(book => book.id !== bookObj.id);
            card.remove();
        })
    });

}

document.getElementById('addbook').addEventListener('click', function(e){
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    let read_line;
    if(read == true){
        read_line = "read";
    }
    else{
        read_line = "not read yet"
    }
    // const name = "test";
    // const author = "test";
    // const pages = "test";
    // const read = "test";
    addBookToLibrary(name, author, pages, read_line);
    displayBooks();
    e.preventDefault();
    
})

