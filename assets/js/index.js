import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');

playButton.onclick = () => {
    (player.playing === true) ? player.pause() : player.play();
};
muteButton.onclick = () => {
    (player.muted === true) ? player.unmute() : player.mute();
};

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}