import http from '../http-common';

const getAll = (limit = 0, offset = 0) => {
  return http.get(`rockets?limit=${limit}&offset=${offset}`);
};

const get = (rocket_id) => {
  return http.get(`rockets'/${rocket_id}`);
};

export default {
  getAll,
  get,
};
