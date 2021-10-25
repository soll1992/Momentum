const play = document.querySelector('.play')
const nextAudio = document.querySelector('.play-next')
const prevAudio = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
const mute = document.querySelector('.mute')
const progressBar = document.getElementById('progress-bar');
const volumeSlider = document.getElementById('volume-bar')
const currentSong = document.querySelector('.current-song')
const audio = new Audio();

let isPlay = false;
let muted = false;
let playNum = 0

import playList from './playList.js';

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = playList[i].title
    li.dataset.id = i;
    li.addEventListener('click', () => {
        if (playNum === i && !audio.paused) {
            audio.pause();
            playListContainer.childNodes[playNum].classList.remove('icon-pause');
            play.classList.remove('pause');
            isPlay = false
            return
        }
        playListContainer.childNodes[playNum].classList.remove('item-active');
        playListContainer.childNodes[playNum].classList.remove('icon-pause');
        playNum = i
        isPlay = true
        showCurrentSong()
        audio.src = playList[playNum].src;
        playListContainer.childNodes[playNum].classList.add('item-active');
        playListContainer.childNodes[playNum].classList.add('icon-pause');
        play.classList.add('pause');
        audio.play();
    })
    playListContainer.append(li)
}

function itemListActivator() {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(el => {
        el.classList.remove('item-active')
        el.classList.remove('icon-pause')
    })
    listItems[playNum].classList.add('item-active')
}

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true
  itemListActivator()
  showCurrentSong()
  playListContainer.childNodes[playNum].classList.add('icon-pause');
}

function pauseAudio() {
    audio.pause();
    isPlay = false
}

function showCurrentSong() {
    currentSong.textContent = playList[playNum].title
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
        play.classList.add('pause');
        playListContainer.childNodes[playNum].classList.add('icon-pause')
    } else {
        pauseAudio()
        play.classList.remove('pause');
        playListContainer.childNodes[playNum].classList.remove('icon-pause')
    }
})

nextAudio.addEventListener('click', () => {
    playNext()
    if(!isPlay) {
        playAudio()
        play.classList.add('pause');
    } else {
        playAudio()
    }
})

prevAudio.addEventListener('click', () => {
    playPrev()
    if(!isPlay) {
        playAudio()
        play.classList.add('pause');
    } else {
        playAudio()
    }
})

audio.addEventListener('ended', () => {
    playNext()
    playAudio()
});

function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    document.querySelector('.durationTime').innerHTML = playList[playNum].duration;

};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 500);

function muteVolume() {
    if (!muted) {
        audio.muted = true;
        muted = true
        mute.classList.toggle('mute-active')
    } else {
        audio.muted = false;
        muted = false
        mute.classList.toggle('mute-active')
    }    
}

function changeProgressBar() {
    audio.currentTime = progressBar.value;
};

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});


mute.addEventListener('click', muteVolume)

progressBar.addEventListener('change',changeProgressBar)

/* const track1 = document.querySelector('.item0')
const track2 = document.querySelector('.item1')
const track3 = document.querySelector('.item2')
const track4 = document.querySelector('.item3')

track1.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(item => {
        item.classList.remove('play-item-pause')
    })
    playNum = 0
        playAudio()
        toggleBtn()
    track1.classList.toggle('play-item-pause');
})

track2.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(item => {
        item.classList.remove('play-item-pause')
    })
    playNum = 1
        playAudio()
        toggleBtn()
    track2.classList.toggle('play-item-pause');
})

track3.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(item => {
        item.classList.remove('play-item-pause')
    })
    playNum = 2
        playAudio()
        toggleBtn()
    track3.classList.toggle('play-item-pause');
})

track4.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.play-item')
    listItems.forEach(item => {
        item.classList.remove('play-item-pause')
    })
    playNum = 3
        playAudio()
        toggleBtn()
    track4.classList.toggle('play-item-pause');

}) */






