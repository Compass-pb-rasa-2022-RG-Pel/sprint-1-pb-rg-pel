const api = require("./api");

const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000);

server.get("/", (req,res)=>{
    return res.send({message: "AGORA VAI PORRA"});
});

server.get("/movie", async (req,res)=>{
    const { id } = req.params;
    try{
        const { data }  = await api.get('movie/1');
        console.log(data);
        return res.send({name: data.name});
    }catch(error){
        res.send({error: error.message});
    }
});

const API_key = '6357cecb3e96ad809c27f13a9a84d7f9';