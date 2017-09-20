/**
 * Created by lorne on 2017/9/20.
 */
import React from 'react';
import videojs from 'video.js'

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate VideoInfo.js
        this.player = videojs(this.videoPlayer, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
        // whatever other things you need to clean up—maybe remove the DOM reference
        this.videoPlayer = undefined;
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <video
                id="videoPlayer"
                ref={(c) => { this.videoPlayer = c; }}
            />
        )
    }
}