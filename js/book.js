function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate; //date object
}

Book.prototype.editBook = function (oBook)
{
  if (oBook.title !== undefined) {
    this.title = oBook.title;
  }

  if (oBook.author !== undefined) {
    this.author = oBook.author;
  }

  if (oBook.numPages !== undefined) {
    this.numPages = oBook.numPages;
  }

  return this;
};
