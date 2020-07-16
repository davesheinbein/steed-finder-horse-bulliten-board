import tokenService from './tokenServices';

const BASE_URL = '/api/horses/';

export default {
  index,
  create,
  update,
  delete: deleteOne
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(horse.comments) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(horse.comments)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function update(horse.comments) {
  return fetch(`${BASE_URL}${horse.comments._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(horse.comments)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  }).then(res => res.json());
}