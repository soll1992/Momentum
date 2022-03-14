(()=>{var e={899:()=>{const e=document.querySelector(".time"),t=document.querySelector(".date"),n=document.querySelector(".greeting"),a=document.querySelector(".slide-next"),o=document.querySelector(".slide-prev"),s=document.querySelector("body"),c=document.querySelector(".name"),i=document.querySelector(".ru"),l=document.querySelector(".en"),r=document.querySelector(".git"),d=document.querySelector(".unsplash"),u=document.querySelector(".flickr");let g=!1,m="01",v="",L="git";function p(){"git"===L&&function(){const e=new Image;e.src=`https://raw.githubusercontent.com/soll1992/stage1-tasks/assets/images/${v}/${m}.jpg`,e.onload=()=>{s.style.backgroundImage=`url('https://raw.githubusercontent.com/soll1992/stage1-tasks/assets/images/${v}/${m}.jpg')`}}(),"unsplash"===L&&async function(){const e=new Image,t=`https://api.unsplash.com/photos/random?orientation=landscape&query=${v},nature&client_id=nop7M0-RPmejMitzKnbiFYnxwc9KNpW_AoN6fv0Mq2Y`,n=await fetch(t),a=await n.json();e.src=`${a.urls.regular}`,e.onload=()=>{s.style.backgroundImage=`url('${a.urls.regular}')`}}(),"flickr"===L&&async function(){const e=new Image,t=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2d7cc89a9f10b77eac4f89da4cf85f24&tags=${v},nature&extras=url_h&format=json&nojsoncallback=1`,n=await fetch(t),a=await n.json();a.photos.photo[+m].url_h?(e.src=`${a.photos.photo[+m].url_h}`,e.onload=()=>{s.style.backgroundImage=`url('${a.photos.photo[+m].url_h}')`}):(e.src=`https://farm${a.photos.photo[+m].farm}.staticflickr.com/${a.photos.photo[+m].server}/${a.photos.photo[+m].id}_${a.photos.photo[+m].secret}.jpg`,e.onload=()=>{s.style.backgroundImage=`url('https://farm${a.photos.photo[+m].farm}.staticflickr.com/${a.photos.photo[+m].server}/${a.photos.photo[+m].id}_${a.photos.photo[+m].secret}.jpg')`})}()}function h(){const a=(new Date).toLocaleTimeString();e.textContent=a,c.placeholder=g?"[Введите имя]":"[Enter name]",function(){const e=new Date;let n={weekday:"long",month:"long",day:"numeric"},a=e.toLocaleDateString("En-en",n);g&&(a=e.toLocaleDateString("Ru-ru",n)),t.textContent=a.replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))}(),function(){if(g){const e=(new Date).getHours();n.textContent=e>=6&&e<12?"Доброе утро":e>=12&&e<18?"Добрый день":e>=18?"Добрый вечер":"Доброй ночи"}else n.textContent=`Good ${v}`}(),setTimeout(h,1e3)}function S(){localStorage.setItem("service",L),localStorage.setItem("lang",g)}!function(){let e=Math.floor(20*Math.random()+1);m=e.toString().padStart(2,"0")}(),function(){const e=(new Date).getHours();v=e>=6&&e<12?"morning":e>=12&&e<18?"afternoon":e>=18?"evening":"night"}(),r.addEventListener("click",(()=>{r.classList.add("lang-active"),u.classList.remove("lang-active"),d.classList.remove("lang-active")})),u.addEventListener("click",(()=>{r.classList.remove("lang-active"),u.classList.add("lang-active"),d.classList.remove("lang-active")})),d.addEventListener("click",(()=>{r.classList.remove("lang-active"),u.classList.remove("lang-active"),d.classList.add("lang-active")})),p(),h(),a.addEventListener("click",(function(){m=20==+m?1:+m+1,m=m.toString().padStart(2,"0"),p()})),o.addEventListener("click",(function(){m=1==+m?20:+m-1,m=m.toString().padStart(2,"0"),p()})),i.addEventListener("click",(()=>{g=!0,S(),h()})),l.addEventListener("click",(()=>{g=!1,S(),h()})),r.addEventListener("click",(()=>{L="git",p()})),u.addEventListener("click",(()=>{L="flickr",p()})),d.addEventListener("click",(()=>{L="unsplash",p()})),window.addEventListener("beforeunload",S),window.addEventListener("load",(function(){g=JSON.parse(localStorage.getItem("lang")),L=localStorage.getItem("service"),"unsplash"==L?(r.classList.remove("lang-active"),u.classList.remove("lang-active"),d.classList.add("lang-active")):"flickr"==L?(r.classList.remove("lang-active"),u.classList.add("lang-active"),d.classList.remove("lang-active")):(r.classList.add("lang-active"),u.classList.remove("lang-active"),d.classList.remove("lang-active")),p(),h()}))},697:()=>{const e=document.querySelector(".name");window.addEventListener("beforeunload",(function(){localStorage.setItem("name",e.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(e.value=localStorage.getItem("name"))}))},65:()=>{const e=document.querySelector(".quote"),t=document.querySelector(".author"),n=document.querySelector(".change-quote"),a=document.querySelector(".ru"),o=document.querySelector(".en");let s=!1;async function c(){const n=Math.floor(4*Math.random());let a="dataEn.json";s&&(a="dataRu.json");const o=await fetch(a),c=await o.json();e.textContent=c[n].text,t.textContent=c[n].author}c(),n.addEventListener("click",c),a.addEventListener("click",(()=>{s=!0,c()})),o.addEventListener("click",(()=>{s=!1,c()})),window.addEventListener("load",(function(){s=JSON.parse(localStorage.getItem("lang")),c()}))},812:()=>{const e=document.querySelector(".settings"),t=document.querySelector(".fixed-overlay"),n=document.querySelector(".ru"),a=document.querySelector(".en"),o=document.querySelector(".time"),s=document.querySelector(".date"),c=document.querySelector(".weather"),i=document.querySelector(".player"),l=document.querySelector(".quote-conteiner"),r=document.querySelector(".quote-button"),d=document.querySelector(".greeting-container"),u=document.querySelector(".clockW"),g=document.querySelector(".wetherW"),m=document.querySelector(".musicW"),v=document.querySelector(".quoteW"),L=document.querySelector(".greetingW");let p=!1,h=!1,S=!1,y=!1,w=!1,f=!1;function q(){const e=document.querySelector(".main-title"),t=document.querySelector(".language-title"),n=document.querySelector(".images-title"),a=document.querySelector(".widgets-title");p?(e.textContent="Настройки",t.textContent="Язык",n.textContent="Изображения",a.textContent="Виджеты",u.textContent="Часы",g.textContent="Погода",m.textContent="Музыка",v.textContent="Цитаты",L.textContent="Приветствие"):(e.textContent="Settings",t.textContent="Language",n.textContent="Images",a.textContent="Widgets",u.textContent="Clock",g.textContent="Weather",m.textContent="Music",v.textContent="Quote",L.textContent="Greeting")}function E(){o.classList.contains("widget-hidden")&&(h=!0),localStorage.setItem("clock",h),c.classList.contains("widget-hidden")&&(S=!0),localStorage.setItem("weather",S),i.classList.contains("widget-hidden")&&(y=!0),localStorage.setItem("player",y),l.classList.contains("widget-hidden")&&(w=!0),localStorage.setItem("quote",w),d.classList.contains("widget-hidden")&&(f=!0),localStorage.setItem("greeting",f)}e.addEventListener("click",(()=>{t.classList.add("fixed-overlay-active")})),document.addEventListener("click",(e=>{e.target.classList.contains("fixed-overlay")&&t.classList.remove("fixed-overlay-active")})),n.addEventListener("click",(()=>{n.classList.add("lang-active"),a.classList.remove("lang-active"),p=!0,q(),E()})),a.addEventListener("click",(()=>{n.classList.remove("lang-active"),a.classList.add("lang-active"),p=!1,q(),E()})),u.addEventListener("click",(()=>{u.classList.toggle("lang-active"),o.classList.toggle("widget-hidden"),s.classList.toggle("widget-hidden"),h=!1})),g.addEventListener("click",(()=>{g.classList.toggle("lang-active"),c.classList.toggle("widget-hidden"),S=!1})),m.addEventListener("click",(()=>{m.classList.toggle("lang-active"),i.classList.toggle("widget-hidden"),y=!1})),v.addEventListener("click",(()=>{v.classList.toggle("lang-active"),r.classList.toggle("widget-hidden"),l.classList.toggle("widget-hidden"),w=!1})),L.addEventListener("click",(()=>{L.classList.toggle("lang-active"),d.classList.toggle("widget-hidden"),f=!1})),window.addEventListener("beforeunload",E),window.addEventListener("load",(function(){h=JSON.parse(localStorage.getItem("clock")),S=JSON.parse(localStorage.getItem("weather")),y=JSON.parse(localStorage.getItem("player")),w=JSON.parse(localStorage.getItem("quote")),f=JSON.parse(localStorage.getItem("greeting")),h&&(u.classList.toggle("lang-active"),o.classList.toggle("widget-hidden"),s.classList.toggle("widget-hidden")),S&&(g.classList.toggle("lang-active"),c.classList.toggle("widget-hidden")),y&&(m.classList.toggle("lang-active"),i.classList.toggle("widget-hidden")),w&&(v.classList.toggle("lang-active"),r.classList.toggle("widget-hidden"),l.classList.toggle("widget-hidden")),f&&(L.classList.toggle("lang-active"),d.classList.toggle("widget-hidden")),p=JSON.parse(localStorage.getItem("lang")),p?(n.classList.add("lang-active"),a.classList.remove("lang-active")):(n.classList.remove("lang-active"),a.classList.add("lang-active")),q()}))},413:()=>{const e=document.querySelector(".weather-icon"),t=document.querySelector(".temperature"),n=document.querySelector(".weather-description"),a=document.querySelector(".wind"),o=document.querySelector(".humidity"),s=document.querySelector(".city"),c=document.querySelector(".weather-error"),i=document.querySelector(".ru"),l=document.querySelector(".en");let r=!1;async function d(){let i=`https://api.openweathermap.org/data/2.5/weather?q=${s.value}&lang=en&appid=1b2ece1a5d0a35f88a6eda97452d2bc6&units=metric`;r&&(i=`https://api.openweathermap.org/data/2.5/weather?q=${s.value}&lang=ru&appid=1b2ece1a5d0a35f88a6eda97452d2bc6&units=metric`);const l=await fetch(i),d=await l.json();"Nothing to geocode"==d.message||"city not found"==d.message||0==+s.value?(c.textContent=r?`Ошибка! Город ${s.value} не найден!`:`Error! City not found for ${s.value}!`,s.value="",e.className="weather-icon owf",t.textContent="",n.textContent="",a.textContent="",o.textContent=""):(c.textContent="",e.className="weather-icon owf",e.classList.add(`owf-${d.weather[0].id}`),t.textContent=`${Math.round(d.main.temp)}°C`,n.textContent=d.weather[0].description,r?(a.textContent=`Скорость ветра: ${Math.round(d.wind.speed)} м/с`,o.textContent=`Влажность: ${d.main.humidity}%`):(a.textContent=`Wind speed: ${Math.round(d.wind.speed)} m/s`,o.textContent=`Humidity: ${d.main.humidity}%`)),s.placeholder=r?"[Введите город]":"[Enter city]"}i.addEventListener("click",(()=>{r=!0,d()})),l.addEventListener("click",(()=>{r=!1,d()})),window.addEventListener("beforeunload",(function(){localStorage.setItem("city",s.value)})),window.addEventListener("load",(function(){r=JSON.parse(localStorage.getItem("lang")),localStorage.getItem("city")?(s.value=localStorage.getItem("city"),d()):(s.value=r?"Минск":"Minsk",d())})),addEventListener("change",d)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}(()=>{"use strict";n(899),n(697),n(413),n(65);const e=[{title:"Aqua Caelestis",src:"./assets/sounds/Aqua Caelestis.mp3",duration:"00:39"},{title:"River Flows In You",src:"./assets/sounds/River Flows In You.mp3",duration:"01:37"},{title:"Summer Wind",src:"./assets/sounds/Summer Wind.mp3",duration:"01:50"},{title:"Ennio Morricone",src:"./assets/sounds/Ennio Morricone.mp3",duration:"01:37"}],t=document.querySelector(".play"),a=document.querySelector(".play-next"),o=document.querySelector(".play-prev"),s=document.querySelector(".play-list"),c=document.querySelector(".mute"),i=document.getElementById("progress-bar"),l=document.getElementById("volume-bar"),r=document.querySelector(".current-song"),d=new Audio;let u=!1,g=!1,m=0;for(let n=0;n<e.length;n++){const a=document.createElement("li");a.classList.add("play-item"),a.textContent=e[n].title,a.dataset.id=n,a.addEventListener("click",(()=>{if(m===n&&!d.paused)return d.pause(),s.childNodes[m].classList.remove("icon-pause"),t.classList.remove("pause"),void(u=!1);s.childNodes[m].classList.remove("item-active"),s.childNodes[m].classList.remove("icon-pause"),m=n,u=!0,L(),d.src=e[m].src,s.childNodes[m].classList.add("item-active"),s.childNodes[m].classList.add("icon-pause"),t.classList.add("pause"),d.play()})),s.append(a)}function v(){d.src=e[m].src,d.currentTime=0,d.play(),u=!0,function(){const e=document.querySelectorAll(".play-item");e.forEach((e=>{e.classList.remove("item-active"),e.classList.remove("icon-pause")})),e[m].classList.add("item-active")}(),L(),s.childNodes[m].classList.add("icon-pause")}function L(){r.textContent=e[m].title}function p(){m+=1,m>3&&(m=0)}t.addEventListener("click",(()=>{u?(d.pause(),u=!1,t.classList.remove("pause"),s.childNodes[m].classList.remove("icon-pause")):(v(),t.classList.add("pause"),s.childNodes[m].classList.add("icon-pause"))})),a.addEventListener("click",(()=>{p(),u?v():(v(),t.classList.add("pause"))})),o.addEventListener("click",(()=>{m-=1,m<0&&(m=3),u?v():(v(),t.classList.add("pause"))})),d.addEventListener("ended",(()=>{p(),v()})),setInterval((function(){i.max=d.duration,i.value=d.currentTime,document.querySelector(".currentTime").innerHTML=function(e){let t=Math.floor(e/60),n=Math.floor(e-60*t);return n<10&&(n=`0${n}`),`${t}:${n}`}(Math.floor(d.currentTime)),document.querySelector(".durationTime").innerHTML=e[m].duration}),500),l.addEventListener("input",(e=>{const t=e.target.value;d.volume=t/100})),c.addEventListener("click",(function(){g?(d.muted=!1,g=!1,c.classList.toggle("mute-active")):(d.muted=!0,g=!0,c.classList.toggle("mute-active"))})),i.addEventListener("change",(function(){d.currentTime=i.value})),n(812)})()})();