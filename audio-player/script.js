const playPause = document.getElementById('play-pause');

const playPauseRotation = () => {
    playPause.classList.toggle('pause');
}

playPause.addEventListener('click', playPauseRotation);