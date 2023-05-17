import { useMusic } from '@/hooks/useMusic';
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Playing() {
    const {url} = useMusic()
    const handleNext = () => {

    }
    const handlePre = () => {
        
    }
    return (
        <div>
            <AudioPlayer 
            className='!bg-[#3c3c4308]' 
            src={url} 
            showSkipControls={true} 
            showJumpControls={false} 
            onClickNext={handleNext}
            onClickPrevious={handlePre}
        />
        </div>
    )
}

export default Playing