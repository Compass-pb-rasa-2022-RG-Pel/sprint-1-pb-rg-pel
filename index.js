const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen("8080", () => {
    console.log("testando a porta 8080")
})


function doNothing() {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {


        if (!e) var e = window.event;

        e.cancelBubble = true;
        e.returnValue = false;

        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
}

async function letraDaMusica(artista,nomeDaMusica) {
    var script = 'https://api.vagalume.com.br/search.php?art=' + artista + '&mus=' + nomeDaMusica + '&apikey={key}';

    const response = await fetch(script);

    const letraJson = await response.json();


    return letraJson;
}


async function exibirLetraMusica(artista,nomeDaMusica){

    let letraDessaMusica = await letraDaMusica(artista,nomeDaMusica);
    letraDessaMusica = letraDessaMusica.mus;
    let letraFinal = [];
    letraFinal = letraDessaMusica[0];

    console.log(letraFinal.text);

    list.innerHTML = letraFinal.text;
}
