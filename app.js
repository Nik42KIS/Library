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
    //books
];

openModal.addEventListener('click', () =>{ 
    modal.showModal();
    // document.addEventListener('click',(e)=>{
    //     if(e.target === modal){
    //         modal.close()
    //     }
    // })
})

// create constructor for new Books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// render books from library 
function render() {
    const newBook = document.createElement('div');
  library.map((i) => {
    
    newBook.innerHTML = `
        <div class="books__item">
          <div class="item__title">${i.title}</div>
          <div class="item__author">${i.author}</div>
          <div class="item__pages">pages:${i.pages}</div>
          <div class="item__read">
              ${i.read}
          </div>
          <button class="delete_btn">delete</button>
        </div>
        `;
    books.appendChild(newBook);
  });
};

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
});


closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.close()
});


function addBookToLibrary() {
  library.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value));
  console.log(library);
  render();
}

console.log(library);
