const playPause = document.getElementById('play-pause'); /*select play/pause button*/
const trackDuration = document.getElementById('track-duration'); /*select duration div */
const trackCT = document.getElementById('track-current-time'); /*select track's current time div */
const trackCover = document.getElementById('cover'); /*select div for track cover */
const trackAuthor = document.getElementById('track-author'); /*select div for track author */
const trackName = document.getElementById('track-name'); /*select div for track author */

const audio = new Audio (); /*create audio element*/
/*array with track objects */
const trackList = [
    {
        "source": "./mp3/04%20P.A.R.T.Y..mp3",
        "author": "Alestorm",
        "track": "P.A.R.T.Y.",
        "cover": "./img/covers/Track1.jpg",
    },
    {
        "source": "./mp3/C03%20Whiskey%20And%20Pills.mp3",
        "author": "Billy Idol",
        "track": "Whiskey And Pills",
        "cover": "./img/covers/Track2.jpg",
    },
    {
        "source": "./mp3/39.%20BFG%2010k.mp3",
        "author": "Mick Gordon",
        "track": "BFG 10k",
        "cover": "./img/covers/Track3.jpg",
    },
    {
        "source": "./mp3/05%20Love%20Sux.mp3",
        "author": "Avril Lavinge",
        "track": "Love Sux",
        "cover": "./img/covers/Track4.jpg",
    },
]

audio.src = trackList[0].source /*'./mp3/05%20Love%20Sux.flac'set source for audio*/
let isPlay = false; /*variable to track if audio is playing or should be stopped*/
let playingTime = 0;

/*change play pause icon*/
const playPauseRotation = () => {
    playPause.classList.toggle('pause');
}

/*play my audio or pause*/
const playAudio = () => {

    if (!isPlay) {
        audio.play();
        isPlay = true;
    }
    else {
        audio.pause();
        isPlay = false;
    }
}

/*
const togglePlay = () => {
    audio.src = './mp3/05%20Love%20Sux.flac'
    const method = audio.paused ? 'play' : 'pause';
    audio[method]();
}*/

/*represent track duration */
const calcTrackDuration = () => {
    dminu = parseInt(audio.duration/60);
    dsecu = parseInt(audio.duration - dminu*60);  
    totalD = `${dminu}:${dsecu}`;
    return totalD;
}

/*calculate current time of track */
const calcTrackCurrTime = () => {
    cminu = parseInt(audio.currentTime/60);
    if (cminu > 0 && cminu < 10) {
        cminu = `0${cminu}`;
    }
    csecu = parseInt(audio.currentTime - cminu*60);
    if (csecu == 0) {
        csecu = '00';
    }
    if (csecu > 0 && csecu < 10) {
        csecu = `0${csecu}`;
    }
    currTime = `${cminu}:${csecu}`;
    return currTime;
}

/*track cover */
const changeCover = () => {
    trackCover.style.background = `url(${trackList[0].cover})`;
    trackCover.style.backgroundSize = 'contain';
    trackCover.style.backgroundRepeat = 'no-repeat';

}

/*track author change */
const changeAuthor = () => {
    trackAuthor.innerText = trackList[0].author;
}

/*track name change */
const changeTrackName = () => {
    trackName.innerText = trackList[0].track;
}

/*listen button click - change icon, start playing*/
playPause.addEventListener('click', () => {
    playPauseRotation();
    playAudio();
    changeCover();
    changeAuthor();
    changeTrackName();
    trackDuration.innerText = calcTrackDuration();
    audio.addEventListener('timeupdate', () => {
        trackCT.innerText = calcTrackCurrTime();
    })
});

audio.addEventListener('ended', () => {
    playPauseRotation();
    isPlay = false;
})