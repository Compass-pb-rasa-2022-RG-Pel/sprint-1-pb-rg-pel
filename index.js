const api = require("./api");

const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000);

server.get("/", (req,res)=>{
    return res.send({message: "AGORA VAI PORRA"});
});

server.get("/dvd", async (req,res)=>{
    try{
        const { data }  = await api.get("/dvd/1");
        return res.send({name: data.name});
    }catch(error){
        res.send({error: error.message});
    }
})