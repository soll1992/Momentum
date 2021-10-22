const play = document.querySelector('.play')
const nextAudio = document.querySelector('.play-next')
const prevAudio = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
const audio = new Audio();

let isPlay = false;
let playNum = 0

import playList from './playList.js';

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = playList[i].title
    playListContainer.append(li)
}

function itemListActivator() {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(el => {
        el.classList.remove('item-active')
    })
    listItems[playNum].classList.add('item-active')
}

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true
  itemListActivator()
}

function pauseAudio() {
    audio.pause();
    isPlay = false
}

function toggleBtn() {
    play.classList.toggle('pause');
}

function playNext() {
    playNum += 1
    if(playNum > 3) {
        playNum = 0
    }
}

function playPrev() {
    playNum -= 1
    if(playNum < 0) {
        playNum = 3
    }
}

play.addEventListener('click', () => {
    if (!isPlay) {
        playAudio()
        toggleBtn()
    } else {
        pauseAudio()
        toggleBtn()
    }
})

nextAudio.addEventListener('click', () => {
    playNext()
    if(!isPlay) {
        playAudio()
        toggleBtn()
    } else {
        playAudio()
    }
})

prevAudio.addEventListener('click', () => {
    playPrev()
    if(!isPlay) {
        playAudio()
        toggleBtn()
    } else {
        playAudio()
    }
})

audio.addEventListener('ended', () => {
    playNext()
    playAudio()
});





