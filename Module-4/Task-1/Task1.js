'use strict';

const tvForm = document.querySelector('#tv-form');

tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('#query').value.trim();

  if (query.length === 0) {
    console.log('Please enter a TV series name.');
    return;
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

    if (!response.ok) {
      throw new Error('Search failed!');
    }

    const results = await response.json();


    console.log('Search results:', results);


    results.forEach(item => {
      console.log('-------------------------');
      console.log('Name:', item.show.name);
      console.log('Language:', item.show.language);
      console.log('Genres:', item.show.genres);
      console.log('Premiered:', item.show.premiered);
      console.log('Rating:', item.show.rating?.average);
      console.log('URL:', item.show.url);
    });

  } catch (error) {
    console.log('Error:', error.message);
  }
});