// Elementos DOM
const songName = document.getElementById('song-name'); //Nome da musica
const bandName = document.getElementById('band-name'); //Nome da banda
const song = document.getElementById('audio'); //Áudio que vai trazer
const cover = document.getElementById('cover'); //Imagem da musica
const play = document.getElementById('play'); //Quando click no play, ele começa a tocar a musica
const next = document.getElementById('next'); //Voltar uma musica
const previous = document.getElementById('previous'); //Avançar uma musica
const likeButton = document.getElementById('like'); //Coraçao 
const currentProgress = document.getElementById('current-progress'); //Tempo da musica
const progressContainer = document.getElementById('progress-container');  //Tempo da musica
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat'); //Repete a musica
const songTime = document.getElementById('song-time'); //Quantidade de tempo
const totalTime = document.getElementById('total-time'); //Tempo maximo da musica

//Músicas escolhidas
const ChangeDeftones = {
    songName: 'Change (In the House of Files)',
    cover: 'CapaDeftones',
    artist: 'Deftones',
    file: 'DeftonesChange',
    liked: false,
};

const SkilletMonster = {
    songName: 'Monster',
    cover: 'CapaSkillet',
    artist: 'Skillet',
    file: 'SkilletMonster',
    liked: false,
};
//Fecha músicas escolhidas

//Playlist e variáveis
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
let currentSongIndex = 0;
const originalPlaylist = [ChangeDeftones, SkilletMonster]; //Chama a variavel com a musica
let playlist = [...originalPlaylist];

//Função para atualizar o botão de like
function likeButtonRender() {
    if (playlist[currentSongIndex].liked) {
        likeButton.querySelector('.bi').classList.remove('bi-heart');
        likeButton.querySelector('.bi').classList.add('bi-heart-fill');
        likeButton.classList.add('button-active');
    } else {
        likeButton.querySelector('.bi').classList.add('bi-heart');
        likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
        likeButton.classList.remove('button-active');
    }
}

//Alternar estado de "like"
function likeButtonClicked() {
    playlist[currentSongIndex].liked = !playlist[currentSongIndex].liked;
    likeButtonRender();
}

//Inicializar a música atual
function initializeSong() {
    const currentSong = playlist[currentSongIndex];
    cover.src = `multimidia/img/${currentSong.file}.jpg`;
    songName.innerText = currentSong.songName;
    bandName.innerText = currentSong.artist;
    song.src = `multimidia/audio/${currentSong.file}.mp3`;
    likeButtonRender();
}

//Reproduzir a música
function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

//Pausar a música
function pauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}

//Alternar play/pause
function playPauseDecider() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

//Música anterior
function previousSong() {
    currentSongIndex = (currentSongIndex === 0) ? playlist.length - 1 : currentSongIndex - 1;
    initializeSong();
}

//Próxima música
function nextSong() {
    currentSongIndex = (currentSongIndex === playlist.length - 1) ? 0 : currentSongIndex + 1;
    initializeSong();
}

//Atualizar progresso da música
function updateProgress() {
    const barWidth = (song.currentTime / song.duration) * 100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}

//Pular para uma parte específica da música
function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition / width) * song.duration;
    song.currentTime = jumpToTime;
}

//Embaralhar playlist
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Alternar botão de shuffle
function shuffleButtonClicked() {
    isShuffled = !isShuffled;
    if (isShuffled) {
        shuffleArray(playlist);
    } else {
        playlist = [...originalPlaylist];
    }
    shuffleButton.classList.toggle('button-active');
}

//Alternar botão de repeat
function repeatButtonClicked() {
    repeatOn = !repeatOn;
    repeatButton.classList.toggle('button-active');
}

//Converter tempo para formato HH:MM:SS
function toHHMMSS(seconds) {
    const hour = Math.floor(seconds / 3600);
    const min = Math.floor((seconds - hour * 3600) / 60);
    const sec = Math.floor(seconds - hour * 3600 - min * 60);
    return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

//Atualizar tempo total da música
function updateTotalTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}

//Configurar eventos
song.addEventListener('ended', () => {
    if (repeatOn) {
        playSong();
    } else {
        nextSong();
    }
});
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
play.addEventListener('click', playPauseDecider);
next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likeButton.addEventListener('click', likeButtonClicked);

//Inicializar a primeira música
initializeSong();