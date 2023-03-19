import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.furniturelelo.com/api/v1',
});
export default instance;
