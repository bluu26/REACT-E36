import React, { useEffect, useState } from 'react';
import Button from "./Button";

const MathQuestionGame = ({ min = 1, max = 10 }) => {
    const operations = ['+', '-', '*', '/'];
    const [operation, setOperation] = useState('');
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(null);
    const [time, setTime] = useState(10);
    const [buttons, setButtons] = useState([]);
    const [message, setMessage] = useState(''); // Dodaj stan do komunikatów
    const [isGameActive, setIsGameActive] = useState(true); // Dodaj stan do aktywności gry

    useEffect(() => {
        const randomOperationIndex = Math.floor(Math.random() * operations.length);
        setOperation(operations[randomOperationIndex]);

        const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
        setFirstNumber(randomNum1);

        const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
        setSecondNumber(randomNum2);

        let res;
        switch (operations[randomOperationIndex]) {
            case '+':
                res = randomNum1 + randomNum2;
                break;
            case '-':
                res = randomNum1 - randomNum2;
                break;
            case '*':
                res = randomNum1 * randomNum2;
                break;
            case '/':
                res = randomNum2 !== 0 ? (randomNum1 / randomNum2).toFixed(2) : 'undefined';
                break;
            default:
                break;
        }
        setResult(res);

        const generateButtons = () => {
            const newButtons = [res];

            while (newButtons.length < 4) {
                const randomIncorrectAnswer = Math.floor(Math.random() * (max * 2));
                if (!newButtons.includes(randomIncorrectAnswer)) {
                    newButtons.push(randomIncorrectAnswer);
                }
            }
            setButtons(shuffle(newButtons));
        };

        generateButtons();

        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval); // Zatrzymaj interwał, gdy czas osiągnie 0
                    setIsGameActive(false); // Zatrzymaj grę
                    setMessage('Czas minął!'); // Ustaw komunikat
                    return 0; // Nie pozwól, aby czas był mniejszy niż 0
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [max, min]);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleButtonClick = (buttonValue) => {
        if (!isGameActive) return; // Nie pozwól klikać, jeśli gra jest nieaktywna

        if (parseFloat(buttonValue) === parseFloat(result)) {
            setMessage('Gratulacje!'); // Ustaw komunikat o poprawnej odpowiedzi
        } else {
            setMessage('Błędna odpowiedź :('); // Ustaw komunikat o błędnej odpowiedzi
        }

        setIsGameActive(false); // Zatrzymaj grę po kliknięciu
    };

    return (
        <div>
            <h1>{`${firstNumber} ${operation} ${secondNumber} = `}</h1>
            <h2>{message}</h2> {/* Wyświetl komunikat */}
            <div>
                {buttons.map((buttonText, index) => (
                    <Button
                        key={index}
                        text={buttonText}
                        onClick={() => handleButtonClick(buttonText)}
                        disabled={!isGameActive} // Zablokuj przyciski, gdy gra jest nieaktywna
                    />
                ))}
            </div>
            <h3>{time}</h3>
        </div>
    );
}

export default MathQuestionGame;
