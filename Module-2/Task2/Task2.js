'use strict';

const participants = parseInt(prompt('Enter the Number of Attendees: '));

const names =[]

for (let i = 0; i < participants; i ++){
  const name = prompt(`Enter Attendee Name ${i +1}: `);
  names.push(name);
}

names.sort();

let items = '<ol>';
for (let name of names) {
  items += '<li>' + name + '</li>';
  }

items += '</ol>';
document.querySelector('#target').innerHTML = `List of Attendees:`;
document.querySelector('#listofattendees').innerHTML = items;

