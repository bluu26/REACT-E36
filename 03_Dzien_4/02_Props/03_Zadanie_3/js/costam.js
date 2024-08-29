import React from 'react';

function Sum({ numbers }) {
    const sum = numbers.reduce((a, b) => {
        return a + b;
    }, 0);

    return <h1>{sum}</h1>;
}

export default Sum;
