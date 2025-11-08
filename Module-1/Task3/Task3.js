'use strict';

const number1 = parseInt(prompt('Please Enter Number1?'));
const number2 = parseInt(prompt('Please Enter Number2?'));
const number3 = parseInt(prompt('Please Enter Number3?'));

const sum = `The sum of your numbers is: ${number1+number2+number3}`;

const product = `The product of your numbers is: ${number1*number2*number3}`;

const avg = `The average of your numbers is: ${(number1+number2+number3)/3}`;

document.querySelector('#target').innerHTML = sum + '<br>' + product + '<br>' + avg;