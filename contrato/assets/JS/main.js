

setInterval(() => {
    const time = document.querySelector(".display #time");
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let dia_noite = "AM";

    if(horas > 12) {
        dia_noite = "PM";
        horas = horas - 12;
    }
    
    if(segundos < 10) {
        segundos = "0" + segundos;
    }

    if(minutos < 10) {
        minutos = "0" + minutos;
    }

    if (horas < 10) {
        horas = "0" + horas;
    }
    time.textContent = horas + ":" + minutos + ":" + segundos + " "+ dia_noite;
});


const btn = document.querySelector('.btnShow')
const messengerTop = document.querySelector('#messengerTop')

btn.addEventListener('click', () => {

    messengerTop.classList.remove('invisibleMessenger')
    messengerTop.classList.add('visibleMessenger')
})

const btnMostra = document.querySelector('.btnMostra')
const btnShow = document.querySelector('#btnShow')

btn.addEventListener('click', () => {

    btnShow.classList.remove('invisibleMessenger')
    btnShow.classList.add('visibleMessenger')
})

