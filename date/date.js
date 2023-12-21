let p1 = document.querySelector("#p1")
let hour = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec") 
let day = document.querySelector("#day")
let username = prompt("İsminizi giriniz")
p1.innerHTML=`Merhaba, ${username}! Hoşgeldin!`
function days(){
    let weekdays=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    let currentDay = new Date();
    hour.innerHTML = currentDay.getHours();
    min.innerHTML = currentDay.getMinutes();
    sec.innerHTML = currentDay.getSeconds();
    day.innerHTML = weekdays[currentDay.getDay()];
}
setInterval(days,1000);