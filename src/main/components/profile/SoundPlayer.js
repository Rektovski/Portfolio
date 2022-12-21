import "../../design/soundPlayer.css";
import Sound from 'react-sound';
import song1 from "../../music/shishi.webm";
import song2 from "../../music/Cocaina.mp4";
import song3 from "../../music/paintItBlack.webm";
import song4 from "../../music/whatsGoingOn.mp3";
import song5 from "../../music/justToOfUs.webm";
import {useState} from "react";
import {FiPlayCircle as PlayIcon} from "react-icons/fi";
import {TiMediaPlayReverseOutline as PreviousSongIcon, TiMediaPlayOutline as ForwardSongIcon} from "react-icons/ti";
import {TbPlayerStop as StopIcon} from "react-icons/tb";
import {BsMusicNoteBeamed as MusicIcon} from "react-icons/bs";

const SoundPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hideMusic, setHideMusic] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(0);
    const songs = [song1, song2, song3, song4, song5];

    const choosePreviousSong = () => {
        if (currentMusic > 0) {
            setCurrentMusic(currentMusic - 1);
        } else if (!currentMusic) {
            setCurrentMusic(songs.length - 1);
        }
    }

    const chooseNextSong = () => {
        if (currentMusic === songs.length - 1) {
            setCurrentMusic(0);
        } else {
            setCurrentMusic(currentMusic + 1);
        }
    }

    return (
        <div>
            <div className={'musicPlayer'}>
                {
                    hideMusic ?
                        <>
                            <PreviousSongIcon size={30} className={'musicPlayerIcons'} onClick={choosePreviousSong}/>
                            {
                                !isPlaying ?
                                    <PlayIcon onClick={() => {
                                        setIsPlaying(!isPlaying)
                                    }} size={30} className={'musicPlayerIcons'}/>
                                    :
                                    <StopIcon onClick={() => {
                                        setIsPlaying(!isPlaying)
                                    }} className={'musicPlayerIcons'} size={30}/>
                            }
                            <ForwardSongIcon size={30} className={'musicPlayerIcons'} onClick={chooseNextSong}/>
                        </>
                        : null
                }
                <MusicIcon className={'musicPlayerIcons'} size={30} onClick={() => setHideMusic(!hideMusic)}/>
            </div>
            <Sound
                url={songs[currentMusic]}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
            />
        </div>
    )
}

export default SoundPlayer;