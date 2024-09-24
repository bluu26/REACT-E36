import React, {useEffect, useState} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";


const Clock = () => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setData(new Date())
        }, 1000);

        return () => clearInterval(id)
    }, []);

  return (
    <div>
      <h1><ClockDate date={data.toLocaleTimeString()}/></h1>
      <h1><ClockTime time={data.toLocaleDateString()}/></h1>
    </div>
  );
}

export default Clock;