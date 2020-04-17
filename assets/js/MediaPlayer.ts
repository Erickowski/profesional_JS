class MediaPlayer {
    media: HTMLMediaElement;
    playing: Boolean;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.playing = false;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
        this.playing = true;
    }
    pause() {
        this.media.pause();
        this.playing = false;
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}
;

export default MediaPlayer;