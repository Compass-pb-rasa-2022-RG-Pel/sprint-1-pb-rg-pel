const axios = require("axios");

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

module.exports = api;