//Initializing variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();

let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Bol do na zara", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg", duration: "04:53" },
    { songName: "Suno na sange", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg", duration: "03:22" },
    { songName: "Hua hai aaj pehli baar", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg", duration: "05:09" },
    { songName: "Hum mar jaayenge", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg", duration: "05:06" },
    { songName: "Mere rashke qamar", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg", duration: "03:40" },
    { songName: "Sanam re", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg", duration: "05:08" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timeSpan")[0].innerText = songs[i].duration;
})

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

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

    })
})