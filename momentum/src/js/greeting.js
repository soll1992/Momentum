const greetingName = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', greetingName.value);
  }

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        greetingName.value = localStorage.getItem('name');
    }
}
  
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

