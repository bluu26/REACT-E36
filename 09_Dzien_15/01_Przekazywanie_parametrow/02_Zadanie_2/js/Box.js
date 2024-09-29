import React, {useState} from 'react';

const Box = () => {

    const [boxStyle, setBoxStyle] = useState({
        height : 500,
        width : 200,
        backgroundColor: 'blue'
    })

    const changeBoxStyle = (height, width, color) => {
        setBoxStyle({
            width: width,
            height: height,
            backgroundColor: color,

        });
    }

    // const buttonOne = {
    //     height : '200px',
    //     width : '300px',
    //     backgroundColor: 'orange'
    // }
    // const buttonTwo = {
    //     height : '100px',
    //     width : '700px',
    //     backgroundColor: 'blue'
    // }
    // const buttonThree = {
    //     height : '500px',
    //     width : '200px',
    //     backgroundColor: 'green'
    // }

  return (
      <div>
        <div style={{
            height: `${boxStyle.height}px`,
            width: `${boxStyle.width}px`,
            backgroundColor: boxStyle.backgroundColor,
        }
        }>
        </div>
          <button onClick={() => changeBoxStyle(200, 300, 'orange')}>orange</button>
          <button onClick={() => changeBoxStyle(500, 600, 'red')}>www</button>
          <button onClick={() => changeBoxStyle(111, 222, 'blue')}>ccc</button>
      </div>
  );
}

export default Box;