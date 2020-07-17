import tokenService from './tokenServices';

const BASE_URL = '/api/comments/';

export default {
    create,
    delete: deleteOne
};

function create(horseid, formData) {
    // console.log(horseid);
    return fetch(`${BASE_URL}${horseid}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(formData)
    })
}

function deleteOne(id) {
    console.log(id, '< id');
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => res.json());
}