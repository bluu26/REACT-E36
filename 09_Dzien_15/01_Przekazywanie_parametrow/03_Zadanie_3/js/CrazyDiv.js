import React, {useState} from 'react';

const CrazyDiv = ({minLeft = 0, maxLeft = 500, minTop = 0, maxTop = 500 }) => {
    const [position, setPosition] = useState({
        left: 0,
        top: 0,
    });

    const getRandomPosition = () => {
        const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft + 1) + minLeft);
        const randomTop = Math.floor(Math.random() * (maxTop - minTop + 1) + minTop);
        return {left: randomLeft, top: randomTop};
    }

    const handleMouseEnter = () => {
        const newPosition = getRandomPosition();
        setPosition(newPosition)
    }

    const [divStyle, setDivStyle] = useState({
        height: 100,
        width: 100,
        position: 'absolute',
        backgroundColor: 'red',

    })

  return (
        <div
            style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                left: `${position.left}px`,
                top: `${position.top}px`,
            }}
            onMouseEnter={handleMouseEnter}
        />
  );
}

export default CrazyDiv;