import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GetNoteQuery } from "./TunerAPI";

const Tuner = () => {
  const [note, setNote] = useState(null);

  const playNote = async (note) => {
    console.log(`playing note ${note}`);
    let audioFile = await GetNoteQuery(note);
    let stringPlayer = new Audio(audioFile.data.file);
    stringPlayer.play();
    setNote(note === "highE" ? "e" : note);
  };

  return (
    <StyledTuner>
      <HeaderWrapper>
        <h1 className="headerTitle">Guitar Tuner</h1>
        <div className="headerSub">
          Tuning your guitar has never been easier.
        </div>
      </HeaderWrapper>

      <NoteWrapper>{note ? note : ""}</NoteWrapper>

      <img
        src="https://stuff.fendergarage.com/f-com/prod/fender-tuner/assets/tuner/img/mobile/paramount/bg-52a3efcdaa63bdea45ecf1c47826f7e2.png"
        useMap="#image-map"
      />

      <map name="image-map">
        <area
          alt="G"
          title="G"
          coords="261,101,27"
          shape="circle"
          onClick={() => playNote("G")}
        />
        <area
          alt="B"
          title="B"
          coords="261,190,24"
          shape="circle"
          onClick={() => playNote("B")}
        />
        <area
          alt="e"
          title="e"
          coords="262,277,26"
          shape="circle"
          onClick={() => playNote("highE")}
        />
        <area
          alt="E"
          title="E"
          coords="59,102,29"
          shape="circle"
          onClick={() => playNote("E")}
        />
        <area
          alt="A"
          title="A"
          coords="59,188,25"
          shape="circle"
          onClick={() => playNote("A")}
        />
        <area
          alt="D"
          title="D"
          coords="62,277,30"
          shape="circle"
          onClick={() => playNote("D")}
        />
      </map>
    </StyledTuner>
  );
};
export default Tuner;

const StyledTuner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 50%
    );
  }

  area {
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .headerTitle {
    align-items: start;
    font-size: 7rem;
    font-weight: 700;
  }

  .headerSub {
    align-items: start;
    font-size: 2rem;
    font-weight: 100;
  }
`;

const pulsate = keyframes`
    100% {
      text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #ae00ff,
        0 0 80px #ae00ff,
        0 0 90px #ae00ff,
        0 0 100px #ae00ff,
        0 0 150px #ae00ff;
    }
    0% {
      text-shadow:
        0 0 2px #fff,
        0 0 4px #fff,
        0 0 6px #fff,
        0 0 10px #ae00ff,
        0 0 45px #ae00ff,
        0 0 55px #ae00ff,
        0 0 70px #ae00ff,
        0 0 80px #ae00ff;
    }
`;

const NoteWrapper = styled.div`
  height: 20vh;
  font-size: 8rem;
  animation: ${pulsate} 2.5s infinite alternate;
`;
