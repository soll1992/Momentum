const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
let isRu = false

async function getWeather() {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=1b2ece1a5d0a35f88a6eda97452d2bc6&units=metric`;
    if(isRu) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=1b2ece1a5d0a35f88a6eda97452d2bc6&units=metric`;
    }
    const res = await fetch(url);
    const data = await res.json(); 
        
    if (data.message == 'Nothing to geocode' || data.message == 'city not found' || +city.value === 0) { 
        if(isRu) {
            error.textContent = `Ошибка! Город ${city.value} не найден!`   
        } else {
            error.textContent = `Error! City not found for ${city.value}!`
        }
        city.value = ''
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = ``;
        weatherDescription.textContent = '';
        wind.textContent = ``
        humidity.textContent = `` 
    } else {
        error.textContent = ``
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        if(isRu) {
            wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`
            humidity.textContent = `Влажность: ${data.main.humidity}%`
        } else {
            wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
            humidity.textContent = `Humidity: ${data.main.humidity}%`
        }
    }
    if(isRu) {
        city.placeholder = '[Введите город]'
    } else {
        city.placeholder = '[Enter city]'
    }
}


function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
  }

function getLocalStorageCity() { 
    isRu = (JSON.parse(localStorage.getItem('lang')))
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather() 
    } else {
        if(isRu) {
            city.value = 'Минск'
        } else {
            city.value = 'Minsk'
        }
        getWeather() 
    }
}

ru.addEventListener('click', () => {
    isRu = true
    getWeather()
})

en.addEventListener('click', () => {
    isRu = false
    getWeather()
})


window.addEventListener('beforeunload', setLocalStorageCity)
window.addEventListener('load', getLocalStorageCity)

addEventListener('change',getWeather)

