const time = document.querySelector('.time');
const dateHTML = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const body = document.querySelector('body')
const name = document.querySelector('.name');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const git = document.querySelector('.git');
const unsplash = document.querySelector('.unsplash');
const flickr = document.querySelector('.flickr');
let isRu = false
let bgNum = '01'
let dayTime = ''
let service = 'git'

function showDate() {
    const date = new Date();
    let options = {weekday: 'long', month: 'long', day: 'numeric'};
    let currentDate = date.toLocaleDateString('En-en',options);
    if(isRu) {
        currentDate = date.toLocaleDateString('Ru-ru',options);
    }
    dateHTML.textContent = currentDate.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() })
}

function getRandomNum() {
    let num = Math.floor(Math.random() * 20 + 1);
    return bgNum = num.toString().padStart(2, '0')
}

getRandomNum()


function getSlideNext() {
    if (+bgNum == 20) {
        bgNum = 1
    } else {
        bgNum = +bgNum + 1
    }
    bgNum = bgNum.toString().padStart(2, '0')
    setBg()
}

function getSlidePrev() {
    if (+bgNum == 1) {
        bgNum = 20
    } else {
        bgNum = +bgNum - 1
    }
    bgNum = bgNum.toString().padStart(2, '0')
    setBg()
}

function getDayTime() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
        dayTime = "morning"
    } else if (hours >= 12 && hours < 18) {
        dayTime = "afternoon"
    } else if (hours >= 18) {
        dayTime = "evening" 
    } else {
        dayTime = "night" 
    }
}

getDayTime()

function getTimeOfDay() {
    if(isRu) {
        const date = new Date();
        const hours = date.getHours();
        if (hours >= 6 && hours < 12) {
            greeting.textContent = `Доброе утро`
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = `Добрый день`
        } else if (hours >= 18) {
            greeting.textContent = `Добрый вечер` 
        } else {
            greeting.textContent = `Доброй ночи` 
        }
    } else {
        greeting.textContent = `Good ${dayTime}`
    }
}

git.addEventListener('click', () => {
    git.classList.add('lang-active')
    flickr.classList.remove('lang-active')
    unsplash.classList.remove('lang-active')
})

flickr.addEventListener('click', () => {
    git.classList.remove('lang-active')
    flickr.classList.add('lang-active')
    unsplash.classList.remove('lang-active')
})

unsplash.addEventListener('click', () => {
    git.classList.remove('lang-active')
    flickr.classList.remove('lang-active')
    unsplash.classList.add('lang-active')
})

function setBg() {
    if (service ==='git') setBgGit()
    if (service ==='unsplash') setBgUnsplash()
    if (service ==='flickr') setBgFlickr()
}

function setBgGit() {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/soll1992/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg`
    img.onload = () => {      
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/soll1992/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg')`;
    };
}

async function setBgUnsplash(){
    const img = new Image();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${dayTime},nature&client_id=nop7M0-RPmejMitzKnbiFYnxwc9KNpW_AoN6fv0Mq2Y`;
    const res = await fetch(url);
    const data = await res.json();
    img.src = `${data.urls.regular}`
    img.onload = () => {      
        body.style.backgroundImage = `url('${data.urls.regular}')`;
    };
};


async function setBgFlickr(){
    const img = new Image();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2d7cc89a9f10b77eac4f89da4cf85f24&tags=${dayTime},nature&extras=url_h&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    if(data.photos.photo[+bgNum].url_h) {
        img.src = `${data.photos.photo[+bgNum].url_h}`
        img.onload = () => {      
            body.style.backgroundImage = `url('${data.photos.photo[+bgNum].url_h}')`;
        };
    } else {
        img.src = `https://farm${data.photos.photo[+bgNum].farm}.staticflickr.com/${data.photos.photo[+bgNum].server}/${data.photos.photo[+bgNum].id}_${data.photos.photo[+bgNum].secret}.jpg`
        img.onload = () => {      
            body.style.backgroundImage = `url('https://farm${data.photos.photo[+bgNum].farm}.staticflickr.com/${data.photos.photo[+bgNum].server}/${data.photos.photo[+bgNum].id}_${data.photos.photo[+bgNum].secret}.jpg')`;
        };
    }

};



function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime
    if(isRu) {
        name.placeholder = '[Введите имя]'
    } else {
        name.placeholder = '[Enter name]'
    }
    showDate()
    getTimeOfDay()
    setTimeout(showTime, 1000);
}

setBg()

showTime()
next.addEventListener('click', getSlideNext)
prev.addEventListener('click', getSlidePrev)
ru.addEventListener('click', () => {
    isRu = true
    setLocalStorageLang()
    showTime()
    }) 

en.addEventListener('click', () => {
    isRu = false
    setLocalStorageLang()
    showTime()
    }) 

git.addEventListener('click', () => {
    service = 'git'
    setBg()
})

flickr.addEventListener('click', () => {
    service = 'flickr'
    setBg()
})

unsplash.addEventListener('click', () => {
    service = 'unsplash'
    setBg()
})


function setLocalStorageLang() {
    localStorage.setItem('service', service)
    localStorage.setItem('lang', isRu)
}

function getLocalStorageLang() {
    isRu = (JSON.parse(localStorage.getItem('lang')))
    service = localStorage.getItem('service')
    if (service == 'unsplash') {
        git.classList.remove('lang-active')
        flickr.classList.remove('lang-active')
        unsplash.classList.add('lang-active')
    } else if (service == 'flickr') {
        git.classList.remove('lang-active')
        flickr.classList.add('lang-active')
        unsplash.classList.remove('lang-active')
    } else {
        git.classList.add('lang-active')
        flickr.classList.remove('lang-active')
        unsplash.classList.remove('lang-active')
    }
    setBg()
    showTime()
}


window.addEventListener('beforeunload', setLocalStorageLang)
window.addEventListener('load', getLocalStorageLang)

    


