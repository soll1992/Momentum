const time = document.querySelector('.time');
const dateHTML = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const body = document.querySelector('body')
let bgNum = '01'
let dayTime = ''

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('En-en',options);
    dateHTML.textContent = currentDate
}

function getRandomNum() {
    let num = Math.floor(Math.random() * 21);
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
}

function getSlidePrev() {
    if (+bgNum == 1) {
        bgNum = 20
    } else {
        bgNum = +bgNum - 1
    }
    bgNum = bgNum.toString().padStart(2, '0')
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
    greeting.textContent = `Good ${dayTime}`
}

function setBg() {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg`
    img.onload = () => {      
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg')`;
    };
}


function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime
    showDate()
    getTimeOfDay()
    setBg()
    setTimeout(showTime, 1000);
}

showTime()
next.addEventListener('click', getSlideNext)
prev.addEventListener('click', getSlidePrev)

    


