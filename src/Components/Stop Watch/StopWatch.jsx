import React, { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const timerRef = useRef(null);
  const [timer, setTimer] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  function handleChange(e, field) {
    //    const {name , value} = e.target;
    //    setTimer({...timer , [name]:value})

    let value = parseInt(e.target.value, 10) || 0;
    let copyTime = { ...timer };
    copyTime[field] = value;


    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;

    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;
    setTimer(copyTime);
  }
  function handleStart() {
    if (
      timer.hour.length === 0 &&
      timer.minute.length === 0 &&
      timer.second.length === 0
    )
      return;
    setIsRunning(!isRunning);
  }
  function handleReset() {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsTimeUp(false); 
    setTimer({
      hour: "",
      minute: "",
      second: "",
    });
  }

  useEffect(() => {
    if (isRunning) {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => {
              let { hour, minute, second } = prevTimer;
              second--;
    
              if (second < 0) {
                minute--;
                second = 59;
              }
              if (minute < 0) {
                hour--;
                minute = 59;
              }
              if (hour < 0) {
                clearInterval(timerRef.current);
                setIsRunning(false);
                setIsTimeUp(true);
                return { hour: "", minute: "", second: "" };
              }
              return { hour, minute, second };
            });
          }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  return (
    <>
      <div className="container">
      {isTimeUp && <div className="time-up-message">Time's Up!</div>}
        <div className="input-container">
          <input
            disabled={isRunning}
            type="text"
            placeholder="HH"
            name="hour"
            value={timer.hour}
            onChange={(e) => {
              handleChange(e, "hour");
            }}
          />{" "}
          :
          <input
          disabled={isRunning}
            type="text"
            placeholder="MM"
            name="minute"
            value={timer.minute}
            onChange={(e)=>{handleChange(e, "minute")}}
          />{" "}
          :
          <input
          disabled={isRunning}
            type="text"
            placeholder="SS"
            name="second"
            value={timer.second}
            onChange={(e)=>{handleChange(e, "second")}}
          />
        </div>
        <div className="button-container">
          <button onClick={handleStart}>{isRunning ? "pause" : "Start"}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
