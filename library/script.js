//book array
const book_list = [];

//book object and constructor
function BookObj(title, author, booklength, read_status){
            if(!(new.target)){ console.log("use new keyword when creatinh this object!");return;}
            this.id = crypto.randomUUID();
            this.title = title;
            this.booklength = booklength;
            this.author = author;
            this.read_status = read_status;
};
BookObj.prototype.changeRead = function(){
        this.read_status = this.read_status === "read" ? "not read yet" : "read";
}
//adding a new object to book array
function createAndAddBookObj(title, author, booklength, read_status){
            const bookItem = new BookObj(title, author, booklength, read_status);
            book_list.push(bookItem);
}
//showing books
function displayBooks(){
    document.getElementById('content').innerHTML = ""
    book_list.forEach(book => {
        
        const card = document.createElement('card');
        // card.className = "card";
        card.classList = "card betania-patmos-in-regular"
        const rightContainer = document.createElement('div');
        card.appendChild(rightContainer);
        const names_div = document.createElement('div');
        names_div.className = "names";
        const status_div = document.createElement('div');
        status_div.className = "status";
        
        const title = document.createElement('div');
        title.className = "title";
        const author = document.createElement('div');
        author.className = "author";
        
        const booklength = document.createElement('div');
        booklength.className = "pages";
        const read_status = document.createElement('div');
        read_status.className = "read_status";

        const toggle = document.createElement('button');
        toggle.className = "toggle";
        const toggle_button_icon = document.createElement('img');
        toggle_button_icon.className = "toggle_button_icon";
        toggle_button_icon.id = "toggle";
        toggle_button_icon.dataset.id = book.id;
        toggle_button_icon.setAttribute('src',"./change.svg");
        toggle.appendChild(toggle_button_icon)
        const delete_button = document.createElement('button');
        const delete_button_icon = document.createElement('img');
        delete_button.className = "delete_button_icon";
        delete_button_icon.setAttribute('src', './delete.svg')
        delete_button_icon.id = "delete_button_icon";
        delete_button_icon.dataset.id = book.id;
        delete_button.appendChild(delete_button_icon);
        card.appendChild(delete_button);
        // console.log("Adding values");
        title.innerText = book.title;
        author.innerText = "written by" + book.author;
        booklength.innerText = book.booklength+" pages";
        read_status.innerText = book.read_status;
        // toggle.innerText = "toggle";
        
        rightContainer.appendChild(names_div);
        rightContainer.appendChild(status_div);
        names_div.appendChild(title);
        names_div.appendChild(author);
        status_div.appendChild(booklength);
        status_div.appendChild(read_status);
        read_status.appendChild(toggle);
        document.getElementById('content').appendChild(card);

    });
}
//get user input via dialog and form
document.getElementById('addbook').addEventListener('click', function(e){
    const id = this.id;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read_status = document.getElementById('read_status').checked;
    const read_string = isread(read_status);
    
    if(!title || !author || !pages){
        alert("please fill all details!");
        return;
    }
    if(!(pages>0)){
        alert("pages cant be negative!");
        return;
    }

    createAndAddBookObj(title,author,pages,read_string);
    displayBooks();
})

//deleting and toggle functionality
document.getElementById('content').addEventListener('click', function(event){
        if(event.target.id=='delete_button_icon'){
            const delID = event.target.dataset.id;
            const filtered = book_list.filter(book => book.id !== delID);
            book_list.length = 0;
            book_list.push(...filtered);
            displayBooks()
        }
        else if(event.target.id == 'toggle'){
            // console.log("toggle status of book " + event.target.dataset.id)
            const ID = event.target.dataset.id;
            const changed = book_list.find(book => book.id == ID);
            if(changed){
                changed.changeRead();
                displayBooks()
            }
            
        }
        
})
//clear all books
document.getElementById('clear').addEventListener('click', function(){
        // alert("clear");       
        book_list.length = 0;
        displayBooks(); 
});

//helper function for read status
function isread(read_status){
        if(read_status == true){
            return "read"
        }
        else{
            return "not read yet"
        }
}
    

//populate with sample books
createAndAddBookObj('The Hobbit', 'J.R.R. Tolkien', 310, isread(true));
createAndAddBookObj('1984', 'George Orwell', 328, isread(false));
createAndAddBookObj('Pride and Prejudice', 'Jane Austen', 432, isread(true));
createAndAddBookObj('The Catcher in the Rye', 'J.D. Salinger', 277, isread(false));
createAndAddBookObj('Dune', 'Frank Herbert', 896, isread(true));
createAndAddBookObj('To Kill a Mockingbird', 'Harper Lee', 281, isread(true));
createAndAddBookObj('Moby-Dick', 'Herman Melville', 720, isread(false));
createAndAddBookObj('The Great Gatsby', 'F. Scott Fitzgerald', 180, isread(true));
createAndAddBookObj('War and Peace', 'Leo Tolstoy', 1225, isread(false));
createAndAddBookObj('The Alchemist', 'Paulo Coelho', 208, isread(true));
displayBooks();