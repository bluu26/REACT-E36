import React, {useState} from 'react';

const Bulb = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleBulb = () => {
        setIsOn(prevState => !prevState)
    };

  return (
    <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: isOn ? 'yellow' : 'white',

    }}>
      <button onClick={toggleBulb}>
          {isOn ? 'Off' : 'On'}
      </button>
    </div>
  );
}

export default Bulb;