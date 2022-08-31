

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