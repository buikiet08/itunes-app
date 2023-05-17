import ReactAudioPlayer from 'react-audio-player';

function MusicPlayer({ trackUrl,autoPlay = false,onPause}) {
    return (

        <ReactAudioPlayer
            src={trackUrl}
            controls
            autoPlay={autoPlay}
            preload="auto"
            onPause={onPause}
        />
    );
}

export default MusicPlayer;
