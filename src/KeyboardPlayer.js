import React from "react";

const KEYS = [
  { sound: "C.mp3", type: "white" },
  { sound: "D.mp3", type: "white" },
  { sound: "E.mp3", type: "white" },
  { sound: "F.mp3", type: "white" },
  { sound: "Csharp.mp3", type: "black", position: "left" },
  { sound: "Dsharp.mp3", type: "black", position: "right" },
];

export default function Keyboard({ volume }) {
  const playSound = (sound) => {
    const audio = new Audio(`/sounds/piano/${sound}`);
    audio.volume = volume;
    audio.play();
  };

  return (
    <div className="piano-keyboard">
      <div className="white-keys">
        {KEYS.filter((key) => key.type === "white").map((key, index) => (
          <div
            key={index}
            className="key white"
            onClick={() => playSound(key.sound)}
          >
            {key.label}
          </div>
        ))}
      </div>
      <div className="black-keys">
        {KEYS.filter((key) => key.type === "black").map((key, index) => (
          <div
            key={index}
            className={`key black ${key.position}`}
            onClick={() => playSound(key.sound)}
          >
            {key.label}
          </div>
        ))}
      </div>
    </div>
  );
}
