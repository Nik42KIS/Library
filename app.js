const books = document.querySelector('.books');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const modalBtn = document.querySelector('.modal_btn');
const inputTitle = document.getElementById('input_title');
const inputAuthor = document.getElementById('input_author');
const inputPages = document.getElementById('input_pages');
const inputRead = document.getElementById('input_read');
const openModal = document.querySelector('.open_modal_btn');
const closeModal = document.querySelector('.modal_close');

const library = [
  {
    title: 'Kerry',
    author: 'Steven King',
    pages: '243',
  },
];

openModal.addEventListener('click', () => {
  modal.showModal();
});

// create constructor for new Books
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// render books from library
function render() {
  const newBook = document.createElement('div');
  newBook.classList.add('books__item');
  library.map((i) => {
    newBook.innerHTML = `
        <div class="item__title">${i.title}</div>
        <div class="item__author">${i.author}</div>
        
        <div class="container_for_active">
        <div class="item__pages">pages:${i.pages}</div>
        <div class="read_status">
        <span>Read</span>
         <input type="radio" name="status" id=""> <br>
         <span>Not read</span>
         <input type="radio" name="status" checked id="">
    </div>
   <button class="delete_btn"> 
     <img src="./images/trash.png" alt="delete">
   </button>
      `;
    books.appendChild(newBook);
  });
}
render();

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.close();
});

function addBookToLibrary() {
  library.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value));
  console.log(library);
  render();
  const deleteBtn = document.querySelectorAll('.delete_btn');
  deleteBtn.forEach((item) => {
    console.log(item);
    item.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.parentElement.remove();
    });
  });
}
