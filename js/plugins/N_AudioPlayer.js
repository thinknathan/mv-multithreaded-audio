/*:
 * @plugindesc v1.0.0 
 * @author Think_Nathan
 */

if (function () {
        // Check for support of the Opus codec and web workers
        let test = document.createElement('audio');
        return !!(typeof (Worker) && test.canPlayType && test.canPlayType('audio/ogg; codecs=opus').replace(/no/, ''));
    }()) {

    // Load the opus player
    PluginManager.loadScript('opus_audioplayer.js');

    // Force all audio files to be opus files
    AudioManager.audioFileExt = function () {
        return '.opus';
    };

    AudioManager.createBuffer = function (folder, name) {
        var ext = this.audioFileExt();
        var url = this._path + folder + '/' + encodeURIComponent(name) + ext;

        // This is a wrapper for compatibility with MV's default audio manager
        return {
            // Initialize some values
            name: name,
            volume: 1,
            pitch: 1,
            pan: 0,
            pos: 0,

            play: async function (unknown, position) {
                console.log('buffer.play');
                // Resume if the player is paused
                if (this._audioPlayer && this._audioPlayer._state && this._audioPlayer._state == 'paused') {
                    this._audioPlayer.resume();
                } else {
                    // Create a new stream
                    await this.create(url);
                    this._audioPlayer.start();

                    // Testing out a gain node. It doesn't seem to work
                    this._audioPlayer._gainNode = this._audioPlayer._audio._audioCtx.createGain();
                }
            },

            stop: function () {
                console.log('buffer.stop');
                if (this.isPlaying()) {
                    this._audioPlayer.pause();
                }
            },

            // The library doesn't have support for seeking
            // So this doesn't do anything
            seek: function () {
                console.log('buffer.seek');
                if (this._audioPlayer && this._audioPlayer._audio && this._audioPlayer._audio._audioCtx) {
                    var pos = this._audioPlayer._audio._audioCtx.currentTime - this._audioPlayer._audio._playStartedAt;
                    return pos;
                } else {
                    return 0;
                }
            },

            // Trying to get fadeIn to work. It's still broken
            fadeIn: function (duration) {
                console.log('buffer.fadeIn');
                this._audioPlayer.resume();
                if (this._audioPlayer && this._audioPlayer._gainNode) {
                    var gain = this._audioPlayer._gainNode.gain;
                    var currentTime = this._audioPlayer._audio._audioCtx.currentTime;
                    gain.setValueAtTime(0, currentTime);
                    gain.linearRampToValueAtTime(this.volume, currentTime + duration);
                }
            },

            fadeOut: function (duration) {
                console.log('buffer.fadeOut');
                this._audioPlayer.pause();
            },

            isPlaying: function () {
                return this._audioPlayer && this._audioPlayer._state == 'playing';
            },

            // Most of these values are hard-coded since
            // I only copied the Opus support from the base library
            // Other codecs could be added in future
            create: async function (url) {
                this._audioPlayer = await new AudioPlayer({
                    url: url,
                    codec: "Opus",
                    mime: 'audio/ogg',
                    decoder: 'WebAssembly',
                    readBufferSize: 1024 * 2,
                    onStateChange: function (state) {
                        console.log('_state = ' + state);
                        this._state = state;
                    }
                });
            },
        };

    };

};
