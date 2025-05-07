function libraryBook(bookTitle,bookAuthor,numOfCopies) {
    this.title = bookTitle;
    this.author = bookAuthor ;
    this.copies = numOfCopies; 

    this.summary = function() {
        return 'The Name of this book is ' + this.title + ' written by ' + this.author ;

    }

    this.borrowBook = function() {
        if (this.copies !== 0) {
            this.copies--;
            return 'You can borrow this book ' + this.title
        } else {
            return 'You can not borrow the book ' + this.title + ' it is out of stock'
        }
    }

    this.copiesRemaining = function() {
        return this.copies
    }



}

const Book1 = new libraryBook("Dorian Gray","Oscar Wilde",12);
const Book2 = new libraryBook("Othello", "William Shakespeare",0);


console.log(Book1.summary() + "\n" + Book2.summary())
console.log(Book2.borrowBook() + "\n" + Book2.copiesRemaining());