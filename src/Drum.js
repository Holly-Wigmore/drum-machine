// Drum.js
import React from "react";
import "./Drum.css";
import DrumPad from "./DrumPad";

// Array of drum pads with key labels and corresponding sound files
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
  return (
    <div className="Drum">
      <h1>Drum Machine</h1>
      <div className="container-box mx-auto mt-5">
        <div className="grid-container text-center">
          {DRUM_PADS.map((pad, index) => (
            <DrumPad key={index} keyLabel={pad.keyLabel} sound={pad.sound} />
          ))}
        </div>
        <div className="content-container">
          <div className="row">Row 1</div>
          <div className="row">Row 2</div>
          <div className="row">Row 3</div>
        </div>
      </div>
    </div>
  );
}
