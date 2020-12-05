import axios from 'axios';

const apiUrl = 'http://localhost:5000';

const api = (url, method = 'get', data = null) => {
  return axios[method](`${apiUrl}${url}`, data)
    .then(response => response.data)
    .catch(error => error);
}

const get = (url) => {
  return api(url);
};

const post = (url, data) => {
  return api(url, 'post', data);
};

const _delete = (url) =>  {
  return api(url, 'delete')
};

const apiRequest = {
  get,
  post,
  delete: _delete
}

export default apiRequest;
