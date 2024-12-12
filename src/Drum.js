import React from "react";
import "./Drum.css";

export default function Drum() {
  return (
    <div className="Drum">
      <h1>Drum Machine</h1>
      <div className="grid text-center">
        <div className="drum-container">
          <div className="grid text-center">
            <div className="g-col-4 drum">Q</div>
            <div className="g-col-4 drum">W</div>
            <div className="g-col-4 drum">E</div>
          </div>
          <div className="grid text-center">
            <div className="g-col-4 drum">A</div>
            <div className="g-col-4 drum">S</div>
            <div className="g-col-4 drum">D</div>
          </div>
          <div className="grid text-center">
            <div className="g-col-4 drum">Z</div>
            <div className="g-col-4 drum">X</div>
            <div className="g-col-4 drum">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
