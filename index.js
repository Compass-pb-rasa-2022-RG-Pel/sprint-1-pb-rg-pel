const api = require("./api");
const express = require("express");
const cors = require("cors")

const server = express();

server.use(express.json());
server.use(cors());

server.listen(8080);

server.get('/pokemon/:id' , async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/${id}`);

      return res.send({ name: data.name });
    } catch (error) {
        res.send({ error: error.message });

    }
    app.listen("8080", ()=>{
        console.log("testando a porta 8080")
    })
} );

