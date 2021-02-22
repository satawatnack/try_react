import http from '../http-common';

const getAll = (limit = 0, offset = 0) => {
  return http.get(`launches?limit=${limit}&offset=${offset}`);
};

const get = (flight_number) => {
  return http.get(`launches/${flight_number}`);
};

export default {
  getAll,
  get,
};
