import tokenService from './tokenService';

const BASE_URL = '/api/horses/';

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(horse) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(horse)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}