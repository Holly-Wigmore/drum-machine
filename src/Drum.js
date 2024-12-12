// Drum.js
import React, { useState } from "react";
import "./Drum.css";
import DrumPad from "./DrumPad";
import KeyboardPlayer from "./KeyboardPlayer";

const DRUM_PADS = [
  { keyLabel: "Q", sound: "kick.wav" },
  { keyLabel: "W", sound: "snare.mp3" },
  { keyLabel: "E", sound: "hihat.mp3" },
  { keyLabel: "A", sound: "tom1.wav" },
  { keyLabel: "S", sound: "tom2.wav" },
  { keyLabel: "D", sound: "clap.wav" },
  { keyLabel: "Z", sound: "rim.wav" },
  { keyLabel: "X", sound: "perc.mp3" },
  { keyLabel: "C", sound: "crash.mp3" },
];

export default function Drum() {
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="Drum">
      <h1>Drum Machine</h1>
      <div className="container-box mx-auto mt-5">
        <div className="grid-container text-center">
          {DRUM_PADS.map((pad, index) => (
            <DrumPad
              key={index}
              keyLabel={pad.keyLabel}
              sound={pad.sound}
              volume={volume}
            />
          ))}
        </div>
        <div className="content-container">
          <div className="content-container">
            <div className="row">
              <label htmlFor="volume-slider" className="form-label">
                Volume
              </label>
              <input
                id="volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="form-range"
              />
            </div>
          </div>
          <div className="row">
            <KeyboardPlayer volume={volume} />
          </div>
        </div>
      </div>
    </div>
  );
}
