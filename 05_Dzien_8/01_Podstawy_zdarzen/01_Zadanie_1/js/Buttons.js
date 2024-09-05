import React from 'react';

const Buttons = () => {

    const clickHandler = () => {
        const numberA = parseInt(prompt("podaj liczbe A"));
        const numberB = parseInt(prompt("podaj liczbe B"));
        console.log(numberA**numberB);

    }

    const gerWindowSize = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(width, height);
        console.log(e);
    }
    const gerWindowSize2 = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log("test");

    }
    return (
        <div>
            <button onClick= {() => console.log("Buttons")}>KliK!</button>
            <button onClick={clickHandler}>KliK2!</button>
            <button onClick={(e) => gerWindowSize(e)}>KliK3!</button>
            <button onClick={gerWindowSize2}>KliK4!</button>
        </div>
    );
};

export default Buttons;