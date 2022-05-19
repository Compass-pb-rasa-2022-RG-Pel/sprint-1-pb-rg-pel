const axios = require("axios");

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/343611?api_key=6357cecb3e96ad809c27f13a9a84d7f9',
});

module.exports = api;