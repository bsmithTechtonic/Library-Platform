function Library()
{
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book)
{
  //check if book is already in my array (this.bookShelf)
  //Add book thats coming from book param if the title is not already in arr
  //return true if book was added and false if it was not add or already exists
  for(var i=0; i<this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === book.title){
      return false;
    }
  }

  this.bookShelf.push(book);
  return true;
};

Library.prototype.removeBookByTitle = function(title)
{
  for(var i=0; i<this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === title){
      this.bookShelf.splice(i, 1);{
        return true;
      }
    }
  }
  return false;
};

Library.prototype.removeBookByAuthor = function(author)
  {
    var haveRemoved = false;
    for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].author === author){
        this.bookShelf.splice(i,1);
        i--;
        haveRemoved = true;
      }
    }
    return haveRemoved;
};

Library.prototype.getRandomBook = function()
{
  if (this.bookShelf.length) {
    var i = this.bookShelf[Math.floor(Math.random() * this.bookShelf.length)];
      return i;
    }
  else {
      return null;
  }
};

Library.prototype.getBookByTitle = function(title)
{
  var matchingTitles = this.bookShelf.filter(item => item.title.indexOf(title) > -1);
  return (matchingTitles);
};
// Sonali helped with this one. Need to get ride of arrow function

// Library.prototype.getBookByTitle = function(title)
// {
//   var matchingTitles = this.bookShelf.filter(this.title.indexOf(title) > -1);
//   return (matchingTitles);
// };

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();

  window.book1 = new Book("It", "Stephen King", 200, "Jan 1 2000");
  window.book2 = new Book("The Shining", "Stephen King", 201, "Feb 2 2001");
  window.book3 = new Book("Green Eggs and Ham", "Dr Seuss", 202, "Mar 3 2002");
  window.book4 = new Book("Harry Potter", "JK Rowling", 203, "Apr 4 2003");
  window.book5 = new Book("Jaws", "Peter Benchley", 204, "May 5 2004");

  gLibrary.addBook(book1);
  gLibrary.addBook(book2);
  gLibrary.addBook(book3);
  gLibrary.addBook(book4);
  gLibrary.addBook(book5);
});


//how is add book function being attached tured into a book object vs just an object
//
