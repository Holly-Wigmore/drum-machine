// DrumPad.js
import React from "react";

export default function DrumPad({ keyLabel, sound, volume }) {
  const playSound = () => {
    const audio = new Audio(`/sounds/${sound}`);
    audio.volume = volume;
    audio.play();
  };

  return (
    <div className="grid-square" onClick={playSound} role="button" tabIndex="0">
      {keyLabel}
    </div>
  );
}
