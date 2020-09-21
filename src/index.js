

const btnIniciar = document.querySelector('[begin]');
const btnResetar = document.querySelector('[reset]');
const btnPausar = document.querySelector('[pause]');

const timer_hor = document.getElementById('horas');
const timer_min = document.getElementById('minutos');
const timer_seg = document.getElementById('segundos');
const timer_dec = document.getElementById('decimos');

const progressBar = document.querySelector('#circle .percent svg circle');

var d = 0; s = 0; m = 0; h = 0;
var crono; isPause = false; isReset = false;
var progress = 440;

const cronometro = () => {
    if(!crono || isPause || isReset){
        isPause = false;
        isReset = false;
        crono = setInterval(() => { timer() }, 10);
    } 
}

const pause = () => {
    isPause = true;
    clearInterval(crono);
}

const reset = () => {
    isReset = true;
    clearInterval(crono);
    progress = 440;
    d = 0;
    s = 0;
    m = 0;
    h = 0;

    formatar();
}

const timer = () => {
    d++;
    progress+= 4.8484848484;
    if (d == 99) {
        d = 0;
        progress = 440;
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
                if(h == 24){
                    h = 0;
                }
            }
        }
    }

    formatar();
}

const formatar = () => {
    progressBar.style.strokeDasharray = progress;

    timer_dec.innerHTML = d < 10 ? '0' + d : d;
    timer_seg.innerHTML = s < 10 ? '0' + s : s;
    timer_min.innerHTML = m < 10 ? '0' + m : m;
    timer_hor.innerHTML = h < 10 ? '0' + h : h;
}



btnIniciar.onclick = cronometro;
btnPausar.onclick = pause;
btnResetar.onclick = reset;