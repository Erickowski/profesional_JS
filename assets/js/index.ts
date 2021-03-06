import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });
const playButton: HTMLElement = document.getElementById('playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');

playButton.onclick = () => {
    (player.playing === true) ? player.pause() : player.play();
};
muteButton.onclick = () => {
    (player.media.muted === true) ? player.unmute() : player.mute();
};

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}