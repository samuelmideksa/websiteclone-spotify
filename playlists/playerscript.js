const playerAudio = document.getElementById('player-audio');
const playerPlayBtn = document.getElementById('player-play');const playerPrevBtn = document.getElementById('player-prev');
const playerPlayIcon = document.querySelector('.player-icon-play');
const playerPauseIcon = document.querySelector('.player-icon-pause');
const playerNextBtn = document.getElementById('player-next');
const playerAlbumArt = document.getElementById('player-album-art');
const playerArtist = document.getElementById('player-artist');
const playerSong = document.getElementById('player-song');
const playerVolumeSlider = document.querySelector('.player-volume-slider');

function setVolume() {
	playerAudio.volume = playerVolumeSlider.value / 100;
}

playerVolumeSlider.addEventListener('input', setVolume);


let currentSong = 0;
const songs = [	
    {albumArt: '../images/playlists/piano.jpg', artist: 'Jonas Hoffmann',name: 'paeoner',src:'../music/Flowers.mp3'},	
    {albumArt: '../images/playlists/piano.jpg', artist: 'Libor Kolman',name: 'Quand vous souriez',	src:'../music/Happy.mp3'},	
    {albumArt: '../images/playlists/piano.jpg',artist: 'Emanuel Fremont',	name: 'Saying Things',	src: '../music/Keep It Burning.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Amine Ayad',name: 'Morning Dance',src: '../music/Lord Lift Me Up.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Elisa Avaria',name: 'Amor Eterno',src: '../music/Broken Road.mp3'},
    {albumArt:'../images/playlists/piano.jpg',artist: 'Jani Lechleiter',name: 'Ma sestra',src: '../music/City of Gods.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Klur',name: 'Entangled',src: '../music/9. MR. MIYAGI.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Listening Wind',name: 'Peaceful Thoughts',src: '../music/First Time In a Long Time.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Constance Lucas',name: 'Open to return',src: '../music/Bet Lost.mp3'},
    {albumArt: '../images/playlists/piano.jpg',artist: 'Josef De Schutter',name: 'Lyrides',src: '../music/Security.mp3'}];

function loadSong() {
	playerAlbumArt.src = songs[currentSong].albumArt;
	playerArtist.innerText = songs[currentSong].artist;
	playerSong.innerText = songs[currentSong].name;
}

function playSong() {
	playerAudio.play();
	playerPlayIcon.style.display = 'none';
	playerPauseIcon.style.display = 'inline-block';
}

function pauseSong() {
	playerAudio.pause();
	playerPlayIcon.style.display = 'inline-block';
	playerPauseIcon.style.display = 'none';
}

function togglePlay() {
	if (playerAudio.paused) {
		playSong();
	} else {
		pauseSong();
	}
}

playerPlayBtn.addEventListener('click', togglePlay);

function prevSong() {
	currentSong--;
	if (currentSong < 0) {
		currentSong = songs.length - 1;
	}
	loadSong();
	playerAudio.src = songs[currentSong].src;
	playSong();
}

function nextSong() {
	currentSong++;
	if (currentSong >= songs.length) {
		currentSong = 0;
	}
	loadSong();
	playerAudio.src = songs[currentSong].src;
	playSong();
}

function updateProgress() {
  const progress = (playerAudio.currentTime / playerAudio.duration) * 100;
  playerProgress.value = progress;
}

function setVolume() {
	playerAudio.volume = playerVolumeSlider.value / 100;
}

playerVolumeSlider.addEventListener('input', setVolume);

playerAudio.addEventListener('timeupdate', updateProgress);

playerPrevBtn.addEventListener('click', prevSong);
playerNextBtn.addEventListener('click', nextSong);

const imgElements = document.querySelectorAll('.playlist-songs');
imgElements.forEach((img) => {
    img.addEventListener('click', () => {
        const songIndex = Array.from(imgElements).indexOf(img);
        currentSong = songIndex;
        loadSong();
        playerAudio.src = songs[currentSong].src;
        playSong();
        document.getElementById('player').style.display = 'block';
    });
});


playerAudio.addEventListener('ended', nextSong);




window.addEventListener('beforeunload', (e) => {
	playerAudio.pause();
});

window.addEventListener('unload', (e) => {
	playerAudio.pause();
});

window.addEventListener('popstate', (e) => {
	if (location.pathname !== '/playlist/') {
		document.getElementById('player').style.display = 'block';
	}
});
