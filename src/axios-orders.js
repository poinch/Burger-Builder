import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-bcd20-default-rtdb.firebaseio.com/'
});

export default instance;