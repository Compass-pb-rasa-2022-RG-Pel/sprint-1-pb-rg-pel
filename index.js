const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/www/index.html')
})

app.listen("8080", () => {
  console.log("testando a porta 8080")
})