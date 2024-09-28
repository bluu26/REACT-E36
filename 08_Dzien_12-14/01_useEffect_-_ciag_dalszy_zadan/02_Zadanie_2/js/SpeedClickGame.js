import React, {useEffect, useState} from 'react';

const SpeedClickGame = () => {
    const [time, setTime] = useState(2000)
    const [points, setPoints] = useState(0)

    const clicker = () => {
        setPoints(points => points + 1);
    }

useEffect(() => {
    const interval = setInterval(() => {
        setTime(prevTime => {
            if (prevTime <= 50) {
                clearInterval(interval);
                return 0; // Ustaw czas na 0, gdy osiągniesz 0
            }
            return prevTime - 50; // Zmniejsz czas
        });
    }, 500);

    return () => clearInterval(interval); // Zawsze czyść interwał
}, []);


  return (
      <div>
          <button onClick={clicker} disabled={time <= 0}>Click me</button>
          <h1>{time}</h1>
          <h2>{points}</h2>
      </div>
  );
}

export default SpeedClickGame;