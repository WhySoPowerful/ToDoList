import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todolist-backendwsp.herokuapp.com/', // Replace with your backend server's URL
    // Optionally, you can set other configuration settings, like headers, timeouts, etc.
});

export default instance;
