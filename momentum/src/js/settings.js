const settings = document.querySelector('.settings')
const modal = document.querySelector('.fixed-overlay')
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

const clockTime = document.querySelector('.time');
const clockDate = document.querySelector('.date');

const weather = document.querySelector('.weather');

const player = document.querySelector('.player');

const quote = document.querySelector('.quote-conteiner');
const changeQuote = document.querySelector('.quote-button');

const greeting = document.querySelector('.greeting-container');

const clockW = document.querySelector('.clockW');
const wetherW = document.querySelector('.wetherW');
const musicW = document.querySelector('.musicW');
const quoteW = document.querySelector('.quoteW');
const greetingW = document.querySelector('.greetingW');

let isRu = false

let clockIsHidden = false
let weatherIsHidden = false
let playerIsHidden = false
let quoteIsHidden = false
let greetingIsHidden = false


settings.addEventListener('click',() => {
    modal.classList.add('fixed-overlay-active')
})

document.addEventListener('click', (e) => {
    let target = (e.target)
    if(target.classList.contains('fixed-overlay')) {
        modal.classList.remove('fixed-overlay-active')
    }
})

ru.addEventListener('click', () => {
    ru.classList.add('lang-active')
    en.classList.remove('lang-active')
    setLocalStorageSettings()
})

en.addEventListener('click', () => {
    ru.classList.remove('lang-active')
    en.classList.add('lang-active')
    setLocalStorageSettings()
})

clockW.addEventListener('click', () => {
    clockW.classList.toggle('lang-active')
    clockTime.classList.toggle('widget-hidden')
    clockDate.classList.toggle('widget-hidden')
    clockIsHidden = false
})

wetherW.addEventListener('click', () => {
    wetherW.classList.toggle('lang-active')
    weather.classList.toggle('widget-hidden')
    weatherIsHidden = false
})

musicW.addEventListener('click', () => {
    musicW.classList.toggle('lang-active')
    player.classList.toggle('widget-hidden')
    playerIsHidden = false
})

quoteW.addEventListener('click', () => {
    quoteW.classList.toggle('lang-active')
    changeQuote.classList.toggle('widget-hidden')
    quote.classList.toggle('widget-hidden')
    quoteIsHidden = false
})

greetingW.addEventListener('click', () => {
    greetingW.classList.toggle('lang-active')
    greeting.classList.toggle('widget-hidden')
    greetingIsHidden = false
})

function setLocalStorageSettings() {
    if(clockTime.classList.contains('widget-hidden')) {
        clockIsHidden = true
    }
    localStorage.setItem('clock', clockIsHidden);
    
    if(weather.classList.contains('widget-hidden')) {
        weatherIsHidden = true
    }
    localStorage.setItem('weather', weatherIsHidden);

    if(player.classList.contains('widget-hidden')) {
        playerIsHidden = true
    }
    localStorage.setItem('player',playerIsHidden);

    if(quote.classList.contains('widget-hidden')) {
        quoteIsHidden = true
    }
    localStorage.setItem('quote', quoteIsHidden);

    if(greeting.classList.contains('widget-hidden')) {
        greetingIsHidden = true
    }
    localStorage.setItem('greeting', greetingIsHidden);
}

function getLocalStorageSettings() {
    clockIsHidden = (JSON.parse(localStorage.getItem('clock')))
    weatherIsHidden = (JSON.parse(localStorage.getItem('weather')))
    playerIsHidden = (JSON.parse(localStorage.getItem('player')))
    quoteIsHidden = (JSON.parse(localStorage.getItem('quote')))
    greetingIsHidden = (JSON.parse(localStorage.getItem('greeting')))
    if(clockIsHidden) {
        clockW.classList.toggle('lang-active')
        clockTime.classList.toggle('widget-hidden')
        clockDate.classList.toggle('widget-hidden')
    }
    if(weatherIsHidden) {
        wetherW.classList.toggle('lang-active')
        weather.classList.toggle('widget-hidden')
    }
    if(playerIsHidden) {
        musicW.classList.toggle('lang-active')
        player.classList.toggle('widget-hidden')
    }
    if(quoteIsHidden) {
        quoteW.classList.toggle('lang-active')
        changeQuote.classList.toggle('widget-hidden')
        quote.classList.toggle('widget-hidden')
    }
    if(greetingIsHidden) {
        greetingW.classList.toggle('lang-active')
        greeting.classList.toggle('widget-hidden')
    }
    isRu = (JSON.parse(localStorage.getItem('lang')))
    if(isRu) {
        ru.classList.add('lang-active')
        en.classList.remove('lang-active')
    } else {
        ru.classList.remove('lang-active')
        en.classList.add('lang-active')
    }
}



window.addEventListener('beforeunload', setLocalStorageSettings)
window.addEventListener('load', getLocalStorageSettings)