import React from 'react';

const ButtonToClick = ({onClick}) => {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }
  return (
      <button onClick={handleClick}>Click me</button>
  );
}

export default ButtonToClick;