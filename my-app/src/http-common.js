import axios from 'redaxios';

export default axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  headers: {
    'content-type': 'application/json',
  },
});
