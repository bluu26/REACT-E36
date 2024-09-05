import React, { useState, useEffect } from 'react';

const Box = () => {
    const [color, setColor] = useState('cornflowerblue'); // Poprawione useState

    useEffect(() => { // Poprawione useEffect
        const id = setTimeout(() => {
            setColor('tomato'); // Zmiana koloru po 3 sekundach
        }, 3000);
        return () => {
            clearTimeout(id); // Czyszczenie timeoutu
        };
    }, []);

    return (
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color
        }} />
    );
}

export default Box;
