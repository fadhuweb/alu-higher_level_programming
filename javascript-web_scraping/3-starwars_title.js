#!/usr/bin/node

const axios = require('axios');

if (process.argv.length !== 3) {
    console.log("Usage: ./script.js <movie_id>");
    process.exit(1);
}

const movieId = process.argv[2];

if (isNaN(movieId)) {
    console.log("Please provide a valid integer as the movie ID.");
    process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

axios.get(url)
    .then(response => {
        console.log(response.data.title);
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            console.log("Invalid movie ID or no title found for the given ID.");
        } else {
            console.log(`An error occurred: ${error.message}`);
        }
    });

