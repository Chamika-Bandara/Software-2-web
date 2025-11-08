'use strict';


const start = parseInt(prompt('Enter the starting year: '));
const end = parseInt(prompt('Enter the ending year: '));

let items = '<ul>';

for (let year = start; year <= end; year++) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    items += '<li>' + year + '</li>';
  }
}

items += '</ul>';

document.querySelector('#listyears').innerHTML = items;