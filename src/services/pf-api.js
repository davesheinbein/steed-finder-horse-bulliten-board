// Importing the API
const BASE_URL = 'https://api.petfinder.com/v2/';

// Exporting the API as a function so it can be accessed elsewhere
function getAllAnimals() {
  return fetch(`${BASE_URL}animals`, {mode: "cors"})
    .then(res => res.json());
}

function getAllTypes() {
  return fetch(`${BASE_URL}types`, {mode: "cors"})
    .then(res => res.json());
}

function getAllBreeds() {
  return fetch(`${BASE_URL}types/{type}/breeds`, {mode: "cors"})
    .then(res => res.json());
}


export default {
    getAllAnimals,
    getAllTypes,
    getAllBreeds
}