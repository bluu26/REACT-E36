import React, {useEffect, useState} from 'react';

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = counter;
    }, [counter])

    return (
        <div>
            <p onClick={() => setCounter(prev => prev + 1)}>
                kliknięto mnie już {counter} razy {/* Poprawiono tekst */}
            </p>

        </div>
    )
}


export default CustomTitle