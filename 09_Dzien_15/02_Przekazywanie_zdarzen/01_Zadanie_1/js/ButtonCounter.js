import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(prevCount => prevCount + 1);
    }
    const handleButtonClick2 = () => {
        setClickCount(prevCount => prevCount - 1);
    }
  return (
    <div>
      <h1>{clickCount}</h1>
        <ButtonToClick onClick={handleButtonClick}/>
        <ButtonToClick onClick={handleButtonClick2}/>

    </div>

  );
}

export default ButtonCounter;