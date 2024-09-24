import React, {useEffect, useState} from 'react';

const StopWatch = () => {
    const [time, setTime] = useState(0)
    const [laps, setLaps] = useState([])
    const [isRunning, setIsRunning] = useState(false)
    const handleLap = () => {
        setLaps(prevLaps => [...prevLaps, time])
    }
    const handleStop = () => {
        setIsRunning(false)
    }

    const handleRestart = () => {
        setTime(0)
        setLaps([])
        setIsRunning(false)
    }

    const handleStart = () => {
        setIsRunning(true)
    }
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)


    },[isRunning]);
  return (
    <div>
      <h1>Time {time}s</h1>
        <button onClick={handleLap}>Lap</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleStart}>Start</button>
        <ul>{laps.map((lap, index) => (
            <li key={index}>{lap}s</li>
        ))}</ul>
    </div>
  );
}

export default StopWatch;