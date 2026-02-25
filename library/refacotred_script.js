const book_list = [];

function BookObj(title, author, booklength, read_status){
            if(!(new.target)){ console.log("use new keyword when creatinh this object!");return;}
            this.id = crypto.randomUUID();
            this.title = title;
            this.booklength = booklength;
            this.author = author;
            this.read_status = read_status;
};
function createAndAddBookObj(title, author, booklength, read_status){
            const bookItem = new BookObj(title, author, booklength, read_status);
            book_list.push(bookItem);
}
function displayBooks(){
    document.getElementById('content').innerHTML = ""
    book_list.forEach(book => {
        
        const card = document.createElement('card');
        card.className = "card";
        
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
        author.innerText = book.author;
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

document.getElementById('content').addEventListener('click', function(event){
        if(event.target.id=='delete_button_icon'){
            const delID = event.target.dataset.id;
            const filtered = book_list.filter(book => book.id !== delID);
            book_list.length = 0;
            book_list.push(...filtered);
            displayBooks()
            
        }
        
})

function isread(read_status){
        if(read_status == true){
            return "read"
        }
        else{
            return "not read yet"
        }
}
