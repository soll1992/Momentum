const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')

async function getQuotes() {  
    const quoteNumber = Math.floor(Math.random() * 4)
    const quotes = 'dataEn.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = data[quoteNumber].text;
    author.textContent = data[quoteNumber].author;
}

getQuotes();

changeQuote.addEventListener('click',getQuotes)

