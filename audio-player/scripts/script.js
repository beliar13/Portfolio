const playPause = document.getElementById('play-pause'); /*select play/pause button*/
const trackDuration = document.getElementById('track-duration'); /*select duration div */
const trackCT = document.getElementById('track-current-time'); /*select track's current time div */
const trackCover = document.getElementById('cover'); /*select div for track cover */
const trackAuthor = document.getElementById('track-author'); /*select div for track author */
const trackName = document.getElementById('track-name'); /*select div for track author */
const progBar = document.getElementById('progr'); /*select div for progressbar */
const progress = document.getElementById('duration-bar'); /*select div for progressbar outer */
const nextTrack = document.getElementById('track-next'); /*select div for next track button */
const prevTrack = document.getElementById('track-prev'); /*select div for prev track button */


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

/*'./mp3/05%20Love%20Sux.flac'set source for audio*/
let i = 0;
audio.src = trackList[i].source
/*variable to track if audio is playing or should be stopped*/
let isPlay = false; 

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
const changeCover = (i) => {
    trackCover.style.background = `url(${trackList[i].cover})`;
    trackCover.style.backgroundSize = 'contain';
    trackCover.style.backgroundRepeat = 'no-repeat';

}

/*track author change */
function changeAuthor(i) {
    trackAuthor.innerText = trackList[i].author;
}

/*track name change */
const changeTrackName = (i) => {
    trackName.innerText = trackList[i].track;
}

/*progressbar update*/
const changeProgress = () => {
    adjPorgress = (audio.currentTime/audio.duration)*100;
    adjPorgress = `${adjPorgress}%`;
    progBar.style.flexBasis = adjPorgress;
}

/*progressbar jump */
const pbJump = (e) => {
const jumpTime = (e.offsetX / progress.offsetWidth) * audio.duration;
audio.currentTime = jumpTime;
}

/*clear track info */
const clearInfo = () => {
    trackCover.style.background =  '#424245';
    trackAuthor.innerText = '--';
    trackName.innerText ='--';
    trackDuration.innerText = '-:-'
    trackCT.innerText = '-:-'
}

/*clear tracks info on page load */
window.onload = () => {
    clearInfo();
}

/*find index of current track */
const findIndex = () => {
    const currTrack = (element) => element.track == trackName.innerText;
    return trackList.findIndex(currTrack);
}

/*next track*/
const toNext = () => {
    i = findIndex();
    listLength = trackList.length;
    if (i < listLength) {
        i += 1;
    }
    if (i == listLength) {
        i = 0;
    }
    audio.src = trackList[i].source
    changeAuthor(i);
    changeTrackName(i);
    changeCover(i);
    audio.play();
}

/*prev track */
const toPrev = () => {
    i = findIndex();
    listLength = trackList.length;
    if (i == 0) {
        i = listLength - 1;
    }
    else {
        i = i -1;
    }
    audio.src = trackList[i].source
    changeAuthor(i);
    changeTrackName(i);
    changeCover(i);
    audio.play();
}

/*listen button click - change icon, start playing, update progressbar*/
playPause.addEventListener('click', () => {
    playPauseRotation();
    playAudio();
    changeCover(i);
    changeAuthor(i);
    changeTrackName(i);
    trackDuration.innerText = calcTrackDuration();
    audio.addEventListener('timeupdate', () => {
        trackCT.innerText = calcTrackCurrTime();
        changeProgress();
    })
});
/*listener change icon when audio ended */
audio.addEventListener('ended', () => {
    playPauseRotation();
    isPlay = false;
})
/*listener for jump on progress bar */
progress.addEventListener('click', pbJump)

/*progressbar drag and drop */
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && pbJump(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


/*listener next track button */
nextTrack.addEventListener('click', toNext)

/*listener prev track button */
prevTrack.addEventListener('click', toPrev)