const axios = require("axios");

const api = axios.creat({
    baseURL: 'https://api.apitore.com/api/22',
});

module.exports = api;