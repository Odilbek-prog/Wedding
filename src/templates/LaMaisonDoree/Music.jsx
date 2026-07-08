import { useEffect, useRef, useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

import music from "../../assets/music/music.mp3";

function Music({ play }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [play]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? <FaVolumeHigh /> : <FaVolumeXmark />}
      </button>
    </>
  );
}

export default Music;
