const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
let isRu = false

async function getQuotes() {  
    const quoteNumber = Math.floor(Math.random() * 4)
    let quotes = 'dataEn.json';
    if(isRu) {
        quotes = 'dataRu.json'
    }
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = data[quoteNumber].text;
    author.textContent = data[quoteNumber].author;
}

getQuotes();

changeQuote.addEventListener('click',getQuotes)
ru.addEventListener('click', () => {
    isRu = true
    getQuotes()
})
en.addEventListener('click', () => {
    isRu = false
    getQuotes()
})

function getLocalStorageLang() {
    isRu = (JSON.parse(localStorage.getItem('lang')))
    getQuotes()
}

window.addEventListener('load', getLocalStorageLang)

