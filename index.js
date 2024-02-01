const addNewBookButton = document.getElementById('add-new');
const submitNewBookButton = document.getElementById('submit-new-book-button');

const formContainer = document.querySelector('form');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const readedInput = document.getElementById('readed');
const tableSection = document.querySelector('.table-of-books-container');
const booksArray = [];


function Book(author, title, pages, readed) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readed = readed;
} 

console.log(readedInput.checked);

addNewBookButton.addEventListener('click', () => {
    formContainer.classList.toggle('disabled');
});

const updateListOfBooks = () => {
    tableSection.innerHTML = "";
    let booksCounter = 0;
    tableSection.innerHTML = `
            <div><p>No.</p></div>
            <div><p>Author</p></div>
            <div><p>Title</p></div>
            <div><p>Pages</p></div>
            <div><p>Readed</p></div>
        `
    booksArray.forEach((book, index) => {
        tableSection.innerHTML += `
            <div><p>${booksCounter += 1}</p></div>
            <div><p>${book.author}</p></div>
            <div><p>${book.title}</p></div>
            <div><p>${book.pages}</p></div>
            <div>
                <p>${book.readed === true ? 'Yes' : 'No'}</p>
                <input type="checkbox" id="readed" onchange="updateRead(${index}, this.checked)" name="readed" value="true" ${book.readed === true ? 'checked' : ''}>
                <button type="button" onclick="removeBook(${index})">Remove</button>
            </div>
        `
    })
}

function removeBook(index) {
    booksArray.splice(index, 1);
    updateListOfBooks();
}

function updateRead(index, checked) {
    booksArray[index].readed = checked;
    updateListOfBooks();
}

const submitNewBook = (event) => {
    event.preventDefault();
    
    booksArray.push(new Book(
        authorInput.value,
        titleInput.value,
        pagesInput.value,
        readedInput.checked 
    )); 

    updateListOfBooks();
}

submitNewBookButton.addEventListener('click', (event) => submitNewBook(event));