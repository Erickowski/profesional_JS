function MediaPlayer(config) {
    this.media = config.el;
    this.playing = false;
    this.plugins = config.plugins || [];
    this._initPlugins();
};
MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        },
    };
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};
MediaPlayer.prototype.play = function () {
    this.media.play();
    this.playing = true;
}
MediaPlayer.prototype.pause = function () {
    this.media.pause();
    this.playing = false;
}
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

export default MediaPlayer;