'use strict';

const name = prompt('Please Enter Name?');

const greeting = `Hello, ${name}!!!!!`;

//console.log(greeting);

document.querySelector('#target').innerHTML = greeting;