import ReactAudioPlayer from 'react-audio-player';

function MusicPlayer({ trackUrl }) {
    return (

        <ReactAudioPlayer
            src={trackUrl}
            controls
            autoPlay={false}
            preload="auto"
        />
    );
}

export default MusicPlayer;
