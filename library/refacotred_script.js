const book_list = [];

function BookObj(title, author, booklength, read_status){
            if(!(new.target)){ console.log("use new keyword when creatinh this object!");return;}
            this.id = crypto.randomUUID();
            this.title = title;
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
        const title = document.createElement('div');
        const author = document.createElement('div');
        const booklength = document.createElement('div');
        const read_status = document.createElement('div');
        
        // console.log("Adding values");
        title.innerText = book.title;
        author.innerText = book.author;
        booklength.innerText = book.booklength;
        read_status.innerText = book.read_status;
        // console.log("done adding");

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(booklength);
        card.appendChild(read_status);
        document.getElementById('content').appendChild(card);
    });
}