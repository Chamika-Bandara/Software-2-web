'use strict';

const form = document.querySelector('#joke-form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const searchValue = document.querySelector('#query').value.trim();

  if (searchValue.length === 0) {
    console.log("Please enter a search term");
    return;
  }

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchValue}`);

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();


    resultsDiv.innerHTML = '';


    if (data.total === 0) {
      resultsDiv.innerHTML = '<p>No jokes found.</p>';
      return;
    }


    data.result.forEach(joke => {
      const article = document.createElement('article');
      const p = document.createElement('p');

      p.textContent = joke.value;

      article.appendChild(p);
      resultsDiv.appendChild(article);
    });

  } catch (error) {
    console.log("Error:", error.message);
  }
});