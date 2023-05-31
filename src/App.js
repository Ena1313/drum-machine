import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      //event.key vraca slovo koje stisnemo na tipkovnici ali lowercase a nama trebaju upperCase
      playSound(event.key.toUpperCase());
    })
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      key: "Q",
      id: 'Heater-1',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" //piano
    },

    {
      keyCode: 87,
      key: "W",
      id: 'Heater-2',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' //piano
    },

    {
      keyCode: 69,
      key: "E",
      id: 'Heater-3',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' //piano
    },

    {
      keyCode: 65,
      key: "A",
      id: 'Heater-4',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },

    {
      keyCode: 83,
      key: "S",
      id: 'Clap',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },

    {
      keyCode: 68,
      key: "D",
      id: 'Open-HH',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },

    {
      keyCode: 90,
      key: "Z",
      id: "Kick-n'-Hat",
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },

    {
      keyCode: 88,
      key: "X",
      id: 'Kick',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },

    {
      keyCode: 67,
      key: "C",
      id: 'Closed-HH',
      //src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (

    <div className="App">
      <div id="drum-machine">

        <div id="display">
          <div id="display-key">{activeKey}</div>
          <div className='drum-pads'>
            {drumPads.map((drumPad, index) => (
              <div
                key={drumPad.src + index}
                onClick={() => {
                  playSound(drumPad.key) /*ovo ce odsvirati zvuk*/
                  setActiveKey(drumPad.id) /*ovo ce displayat naziv drum-a*/
                }}
                className="drum-pad"
                id={drumPad.src}>
                {drumPad.key} {/*sto pise u kockicama*/}
                <audio
                  className="clip"
                  id={drumPad.key}
                  src={drumPad.src}>
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

{/*
        <div id="display">{activeKey}
          <div className='piano-pads'>
            {pianoPads.map((pianoPad, index) => (
              <div
                key={pianoPad.src + index}
                onClick={() => {
                  playSound(pianoPad.key)
                }}
                className="piano-pad"
                id={pianoPad.src}>
                {pianoPad.key}
                <audio
                  className="clip"
                  id={pianoPad.key}
                  src={pianoPad.src}>
                </audio>
              </div>
            ))}
          </div>
        </div>
      */}