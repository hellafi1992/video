const videoPlayer = document.getElementById('video-player');
const playPauseButton = document.getElementById('play-pause-button');
const stopButton = document.getElementById('stop-button');
const volumeButton = document.getElementById('volume-button');
const videoList = document.querySelector('.video-list');

playPauseButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
    videoPlayer.play();
} else {
    videoPlayer.pause();
}
});

stopButton.addEventListener('click', () => {
    videoPlayer.currentTime = 0;
    videoPlayer.pause();
});

volumeButton.addEventListener('click', () => {
    videoPlayer.muted = !videoPlayer.muted;
});

videoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
    const videoSrc = e.target.getAttribute('data-video-src');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}
});