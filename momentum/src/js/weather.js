const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');
city.value = 'Minsk'

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=1b2ece1a5d0a35f88a6eda97452d2bc6&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    console.log(data)
    console.log(data.message)
    
    if (data.message == 'Nothing to geocode' || data.message == 'city not found') { 
        error.textContent = `Error! Nothing to geocode for ${city.value}!`
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
        wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
        humidity.textContent = `Humidity: ${data.main.humidity}%`
    }
}

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
  }

function getLocalStorageCity() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
  
window.addEventListener('beforeunload', setLocalStorageCity)
window.addEventListener('load', getLocalStorageCity)

getWeather()

addEventListener('change',getWeather)