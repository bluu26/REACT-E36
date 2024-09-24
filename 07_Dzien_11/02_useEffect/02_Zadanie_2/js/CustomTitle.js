import React, {useEffect, useState} from 'react';

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = counter;
    }, [counter]);

    return <div>
        <p onClick={() => setCounter(prev => prev +1)}
        style ={{fontSize: `${1.2 * counter}rem`}}>
            kliknieto mnie już {counter} razy
        </p>
    </div>
}



export default CustomTitle