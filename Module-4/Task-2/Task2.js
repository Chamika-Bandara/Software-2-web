'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const searchValue = document.querySelector('#query').value.trim();

  if (searchValue.length === 0) {
    console.log("Please enter a TV series name");
    return;
  }

  try {
    console.log("Searching:", searchValue);

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();

    console.log("Search results:", data);


    data.forEach(item => {
      console.log("--------------");
      console.log("Name:", item.show.name);
      console.log("Genres:", item.show.genres);
      console.log("Rating:", item.show.rating?.average);
      console.log("URL:", item.show.url);
    });

  } catch (error) {
    console.log("Fetch error:", error.message);
  }
});