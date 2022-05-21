const express = require('express');
let app = express();

app.use(express.static("."));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen("8080", function () {
  console.log('Starting hello-world server...');
})