class Book {
  constructor(title, author, pages, description, currentPage, read) {
    this.title = 0;
    this.author = 0;
    this.pages = 0;
    this.description = 0;
    this.currentPage = 1;
    this.read = false;
  }

  showReadBook() {
    console.log(this.read);
  }
}

const newRead = new Book(false); //readBook prends un numéro de page;
newRead.showReadBook();


