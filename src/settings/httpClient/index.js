/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
const genericRequest = async (url, request, verb, token) => {
  const response = await fetch(url, {
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(request),
  }).then((response) => response.json());

  return response;
};

const post = async (url, request, token) => genericRequest(url, request, 'POST', token);

const get = async (url, request) => {
  const response = await fetch(`${url}${request}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return response;
};

const patch = async (url, request) => genericRequest(url, request, 'PATCH');

const put = async (url, request, token) => genericRequest(url, request, 'PATCH', token);


const _delete = async (url, token) => {
  const response = await fetch(`${url}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response);
  return response;
};

export default {
  post,
  get,
  patch,
  _delete,
  put,
};
