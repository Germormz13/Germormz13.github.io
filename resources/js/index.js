let subMensaje1 = "Hola soy ";
let subMensaje2 = ", confirmo mi asistencia a su Boda";

const audio = new Audio("resources/audio/music.mp3");
audio.loop = true;

function onCountdownLoad() {
    let date = new Date('August 22, 2024 19:00:00');
    let now = new Date();
    let distance = date - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

function onSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mensaje = (subMensaje1 + name + subMensaje2).replace(" ", "%20");
    let url = "https://wa.me/+5215544494315?text=" + mensaje;
    window.location.href = url;
}

function playMusic() {
    let playBtn = document.getElementById("play");
    let stopBtn = document.getElementById("stop");
    
    if (!audio.paused) {
        playBtn.classList.add("hidden");
        stopBtn.classList.remove("hidden");
        audio.pause();
        audio.currentTime = 0;
    } else {
        playBtn.classList.remove("hidden");
        stopBtn.classList.add("hidden");
        audio.play().catch((error) => {
            console.log('Auto-play was prevented:', error);
        });
    }
}

function onLoad() {
    onCountdownLoad();
    setInterval(onCountdownLoad, 1000);
    audio.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const images = document.querySelectorAll('.slider-container img');
    
    let currentIndex = 0;
  
    function updateSlidePosition() {
        const slideWidth = sliderContainer.clientWidth;
        sliderContainer.scrollTo({ left: currentIndex * slideWidth, behavior: 'smooth' });
    }
  
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlidePosition();
    });
  
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    });
  
    setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    }, 5000); // Cambia cada 5 segundos

    updateSlidePosition();
    onLoad(); // Llamar a onLoad al cargar el DOM
});
