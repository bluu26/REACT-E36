import React, {useEffect, useState} from 'react';

const AnotherColor = () => {
    const [color, setColor] = useState("yellow")

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor("blue")
        },5000)
        return () => clearTimeout(timer)
    },
        []);

  return (
      <div style={{backgroundColor: color, height: '100vh', width: '100%'}}>
      </div>
  );
}

export default AnotherColor;