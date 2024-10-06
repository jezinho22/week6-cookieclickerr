// src/components/Timer.jsx
import React, { useEffect, useState } from "react";

const Timer = ({ increment }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    if (increment > 0) {
      setTimer((currentTimer) => currentTimer + 1);
    }
  }, [increment]);
  return <div>Timer: {timer} seconds</div>;
};

export default Timer;
