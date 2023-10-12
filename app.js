const books = document.querySelector('.books');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const modalBtn = document.querySelector('.modal_btn');
const inputTitle = document.getElementById('input_title');
const inputAuthor = document.getElementById('input_author');
const inputPages = document.getElementById('input_pages');

const library = [
  {
    title: 'Kerry',
    author: 'S.King',
    pages: 250,
  },
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  library.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value));
  console.log(library);
}

console.log(library);
