'use strict';

async function getJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();


    console.log("Random Chuck Norris Joke:");
    console.log(data.value);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getJoke();