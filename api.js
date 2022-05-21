const axios = require("axios");

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

module.exports = api;

async function pokemon() { 

const express = require("express");
const cors = require("cors");
const server = express();
const replace = '';

server.use(express.json());
server.use(cors());

server.listen(3000);

server.get('/pokemon/:id' , async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/${id}`);

      
      return res.send({ name: data.name });
    } catch (error) {
        res.send({ error: error.message });

    }
} );
    
  }
    /*const id = document.getElementById("id").value
    const config = {
      method: "get", 
      headers: {'Access-Control-Allow-Origin': '*'},
      url: `http://localhost:3000/pokemon/${id}`
    }
    const { data } = await axios(config)
    const texto =`<p> Nome do Pokemon: ${data.name} </p>`

    if(data){
      document.getElementById("nome").innerHTML = texto //sobre escreve//
      //.insertAdjacentHTML('afterend',texto)('afterend',texto)- mantém//
    }
    */