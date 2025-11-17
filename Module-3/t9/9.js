'use strict';

const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', function(evt) {

    const calculation = calculationInput.value;

    let result;

    if (calculation.includes('+')) {
        const parts = calculation.split('+');
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        result = num1 + num2;
    } else if (calculation.includes('-')) {
        const parts = calculation.split('-');
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        result = num1 - num2;
    } else if (calculation.includes('*')) {
        const parts = calculation.split('*');
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        result = num1 * num2;
    } else if (calculation.includes('/')) {
        const parts = calculation.split('/');
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        result = num1 / num2;
    }

    resultParagraph.innerText = `Result: ${result}`;
});