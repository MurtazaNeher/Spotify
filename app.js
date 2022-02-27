//Initializing variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();

let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let progressBar = document.getElementById('progressBar');


let songs = [
    { songName: "Bol do na zara", filePath: "songs/1.mp3", coverPth: "covers/cover1.jpg" },
    { songName: "Suno na sange", filePath: "songs/2.mp3", coverPth: "covers/cover2.jpg" },
    { songName: "Hua hai aaj pehli baar", filePath: "songs/3.mp3", coverPth: "covers/cover3.jpg" },
    { songName: "Hum mar jaayenge", filePath: "songs/4.mp3", coverPth: "covers/cover4.jpg" },
    { songName: "Mere rashke qamar", filePath: "songs/5.mp3", coverPth: "covers/cover5.jpg" },
    { songName: "Sanam re", filePath: "songs/6.mp3", coverPth: "covers/cover6.jpg" },

]

//Listen events

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    } else {

        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove(' fa-pause');
        masterPlay.classList.add(' fa-play');


    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {

    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})