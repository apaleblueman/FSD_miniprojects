class Book{
    constructor(title,booklength,author,read_status) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.booklength = booklength;
        this.author = author;
        this.read_status = read_status;
    }   
    changeRead() {
        this.read_status = this.read_status === "read" ? "not read yet" : "read";
    }
}


const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);
console.log(book1);