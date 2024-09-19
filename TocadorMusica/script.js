const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");

songName.innerText = 'Change (In The House Of Files)';
let isPlaying = false;

function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.pause();
}

play.addEventListener("click", playSong);