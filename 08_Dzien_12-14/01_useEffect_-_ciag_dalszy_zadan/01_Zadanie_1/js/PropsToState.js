import React, {useEffect, useState} from 'react';
import ShowInfo from "./ShowInfo";

const PropsToState = ({text}) => {
    const [localText, setLocalText] = useState(text);

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalText(prevText => prevText + '.')
        },1000);

        return () => clearInterval(interval);
        }, []);

  return (
      <div>
          <ShowInfo info={localText}/>
      </div>
  );
}

export default PropsToState;