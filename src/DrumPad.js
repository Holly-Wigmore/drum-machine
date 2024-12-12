// DrumPad.js
import React from "react";

export default function DrumPad({ keyLabel, sound }) {
  const playSound = () => {
    const audio = new Audio(`/sounds/${sound}`); // Make sure the sound files are in public/sounds/
    audio.play();
  };

  return (
    <div className="grid-square" onClick={playSound} role="button" tabIndex="0">
      {keyLabel}
    </div>
  );
}
