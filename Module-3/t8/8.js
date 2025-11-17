'use strict';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', function(evt) {

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    const operation = operationSelect.value;

    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'multi') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2;
    }

    resultParagraph.innerText = `Result: ${result}`;
});