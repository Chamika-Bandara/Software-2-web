'use strict';

const form = document.querySelector('#tv-form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const searchValue = document.querySelector('#query').value.trim();

  if (searchValue.length === 0) {
    console.log("Please enter a TV series name");
    return;
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();


    resultsDiv.innerHTML = '';

    data.forEach(item => {
      const tvShow = item.show;


      const article = document.createElement('article');


      const h2 = document.createElement('h2');
      h2.textContent = tvShow.name;


      const link = document.createElement('a');
      link.href = tvShow.url;
      link.target = "_blank";
      link.textContent = "Show details";


      const img = document.createElement('img');

      img.src = tvShow.image
        ? tvShow.image.medium
        : "https://placehold.co/210x295?text=Not%20Found";

      img.alt = tvShow.name;


      const summaryDiv = document.createElement('div');
      summaryDiv.innerHTML = tvShow.summary || "No summary available.";


      article.appendChild(h2);
      article.appendChild(link);
      article.appendChild(img);
      article.appendChild(summaryDiv);


      resultsDiv.appendChild(article);
    });

  } catch (error) {
    console.log("Fetch error:", error.message);
  }
});