
const books = document.querySelector('.books')
const modal = document.querySelector('.modal')
const form =  document.querySelector('.modal__form')
const modalBtn = document.querySelector('.modal_btn')
const inputTitle = document.getElementById('input_title')
const inputAuthor = document.getElementById('input_author')
const inputPages = document.getElementById('input_pages')

const library = [
    {
        title : 'Kerry',
        author: 'S.King',
        pages: 250,
    }
]

function Book(title, author, pages){

this.title = title;
this.author = author;
this.pages = pages;
}

modalBtn.addEventListener('click', addBookToLibrary )

function addBookToLibrary(){
 library.push(new Book(inputTitle.textContent, inputAuthor.textContent, inputPages.textContent))
 console.log(library)
}

let book1 = new Book('h', 's', 't')

console.log(library)