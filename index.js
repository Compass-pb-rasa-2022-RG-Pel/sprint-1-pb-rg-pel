/*const api = require("./api");

const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000);

server.get("/", (req,res)=>{
    return res.send({message: "AGORA VAI PORRA"});
});

server.get("/pokemon", async (req,res)=>{
    const { id } = req.params;
    try{
        const { data }  = await api.get('pokemon/1');
        console.log(data);
        return res.send({name: data.name});
    }catch(error){
        res.send({error: error.message});
    }
});
*/
const filme = document.getElementById("filme");


filme.addEventListener("blur",(e)=>{
    console.log(filme.value);
    const options ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.themoviedb.org/3/search/movie?query=${filme.value}&api_key=6357cecb3e96ad809c27f13a9a84d7f9&language=pt-BR`,options)
    .then(response=>{ response.json()
        .then(data => console.log(data)) 
        console.log(response)
    })
    .catch(e => console.log('Deu erro: '+e,message));
})
const API_key = '6357cecb3e96ad809c27f13a9a84d7f9';

//Usando a api do pokemon funciona...

//Segunda tentativa usando FETCH
