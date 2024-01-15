import React, { useRef, useEffect } from "react";

const AudioComponent = (props) => {
  const audioRef = useRef();

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  useEffect(() => {
    if (props.play) {
      playAudio();
    }
  }, [props.play]);

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/src/assets/img/free.mp3" type="audio/mp3" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </div>
  );
};

export default AudioComponent;
