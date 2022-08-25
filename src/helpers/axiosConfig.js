import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://208.64.158.49/api',
});

export default instance;
