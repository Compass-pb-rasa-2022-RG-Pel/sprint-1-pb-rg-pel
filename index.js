const express = require('express');
let app = express();

app.use(express.static("."));

app.get('/', function (req, res) {
    res.sendFile('./index.html');
})

app.listen("3000", function () {
  console.log('Starting hello-world server...');
})