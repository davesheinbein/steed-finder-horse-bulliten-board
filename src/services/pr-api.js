// Importing the API
const BASE_URL = 'https://www.petrescue.com.au/api/v2/';

// Exporting the API as a function so it can be accessed elsewhere

function getAllBreeds() {
  return fetch(`${BASE_URL}breeds`, {mode: "cors"})
    .then(res => res.json());
}


export default {
    getAllBreeds
}