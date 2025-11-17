'use strict';

const form = document.getElementById('source');

const target = document.getElementById('target');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const firstnameInput = document.querySelector('input[name="firstname"]');
    const lastnameInput = document.querySelector('input[name="lastname"]');

    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;

    target.innerText = `Your name is ${firstname} ${lastname}`;
});