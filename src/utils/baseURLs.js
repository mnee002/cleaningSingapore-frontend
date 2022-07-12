import axios from 'axios';

export const frontEndUrl = `http://localhost:3000/`;

export const backendUrl = `https://cleaningsingapore.herokuapp.com/`;

export default axios.create({
  baseURL: backendUrl,
  withCredentials: true,
  timeout: 3000,
});
