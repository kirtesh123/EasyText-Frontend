import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://easy-text.herokuapp.com'
});

export default instance;