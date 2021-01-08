import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { CircularProgress } from "@material-ui/core";
import useSound from "use-sound";
import sound from "../assets/piece-of-cake.mp3";
import useLongPress from "../hooks/useLongPress";
import { ThemeContext } from "../context/ThemeState";

const Timer = ({ proptime }) => {
  const [time, settime] = useState(
    () => (proptime == null ? 25 : proptime) * 60
  );
  const [min, setmin] = useState();
  const [sec, setsec] = useState();

  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      var timerID = setInterval(() => tick(), 1000);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [time, isRunning, tick]);

  useEffect(() => {
    setmin(Math.floor(time / 60));
    setsec(time % 60);
  }, [min, sec, time, start, proptime]);

  useEffect(() => {
    reset();
    return () => { };
  }, [proptime]);

  useEffect(() => {
    if (time == 0) {
      play();
    }
    return () => { };
  }, [time]);

  function tick() {
    if (time > 0) {
      setmin(Math.floor(time / 60));
      setsec(time % 60);
      settime((currtime) => currtime - 1);
    }
  }

  function toggle() {
    if (time == 0) {
      reset();
    } else {
      setisRunning((curr) => !curr);
    }
  }

  function reset() {
    settime(proptime * 60);
    setmin(Math.floor(time / 60));
    setsec(time % 60);
    setisRunning(false);
  }

  function start() {
    setisRunning(true);
  }

  function stop() {
    setisRunning(false);
  }

  const { x } = useSpring({
    from: { x: 0 },
    x: isRunning ? 1 : 0,
    config: { duration: 1000 },
  });

  const [play] = useSound(sound);

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(
    () => reset(),
    () => toggle(),
    defaultOptions
  );

  const { color } = useContext(ThemeContext);

  return (
    <>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        <div {...longPressEvent} style={{ cursor: "pointer" }}>
          <CircularProgress
            variant="determinate"
            value={(time / (proptime * 60)) * 100}
            style={{
              color: color.secondary,
              height: "250px",
              width: "250px",
              padding: "2.5em",
            }}
          />
        </div>
      </animated.div>

      <Time value={color.secondary}>
        {min}:{sec < 10 ? "0" + sec : sec}
      </Time>
    </>
  );
};

export default Timer;

const Time = styled.div`
  background: transparent;
  // border-radius: 3px;
  font-size: 7em;
  text-align: center;
  justify-content: center;
  align-items: center;
  // border: 2px solid #5493dd;
  color: ${(props) => props.value};

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
