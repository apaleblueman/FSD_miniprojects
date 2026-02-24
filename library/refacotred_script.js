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
        
        const card = document.createElement('div');
        card.className = 'card';
        const rightDiv = document.createElement('div');
        const names = document.createElement('div');
        names.className = "names";
        const title = document.createElement('div');
        title.className = 'title';
        const author = document.createElement('div');
        author.className = 'author';
        names.appendChild(title);
        names.appendChild(author);
        rightDiv.appendChild(names);
        const status = document.createElement('div');
        status.className = "status";
        const booklength = document.createElement('div');
        booklength.className = 'booklength';
        const read_status = document.createElement('div');
        read_status.className = 'read_status';
        status.appendChild(booklength);
        status.appendChild(read_status);
        const toggle = document.createElement('button');
        toggle.innerText = "toggle";
        toggle.className = "toggle";
        toggle.id = "toggle";
        status.appendChild(toggle);
        rightDiv.appendChild(status);
        const delete_button = document.createElement('button');
        delete_button.className = 'delete';
        delete_button.id = 'delete';
        const delete_img = document.createElement('img');
        delete_img.className = 'delete_button_icon';
        delete_img.id = 'delete_button_icon';
        delete_img.dataset.id = book.id;
        delete_img.setAttribute('src', './delete.svg');
        delete_button.appendChild(delete_img);
        // console.log("Adding values");
        title.innerText = book.title;
        author.innerText = book.author;
        booklength.innerText = book.booklength;
        read_status.innerText = book.read_status;
       
        card.appendChild(rightDiv);
        card.appendChild(delete_button);
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
