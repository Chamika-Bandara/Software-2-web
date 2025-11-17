'use strict';

const target = document.getElementById('target');


const li1 = document.createElement('li');
li1.innerText = 'First item';
target.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'Second item';
li2.classList.add('my-item');  // Add class 'my-item' to second item
target.appendChild(li2);


const li3 = document.createElement('li');
li3.innerText = 'Third item';
target.appendChild(li3);