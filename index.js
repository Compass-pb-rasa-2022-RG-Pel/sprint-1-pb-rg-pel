const express = require('express')
let app = express();
const port = 8080;

app.use(express.static("."));

//Defining root folder as default
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log("testando a porta " + port)
})

// Stops from sending incomplete data to db
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


async function letraDaMusica(artista0,nomeDaMusica0) {
    var artista = artista0;
    var nomeDaMusica = nomeDaMusica0;
    var script = 'https://api.vagalume.com.br/search.php?art=' + artista + '&mus=' + nomeDaMusica + '&apikey={key}';

    const response = await fetch(script);

    const letraJson = await response.json();

    
    return letraJson;
}



async function exibirLetraMusica(artista,nomeDaMusica){
    
    let letraDessaMusica = await letraDaMusica(artista,nomeDaMusica);
    letraDessaMusica = letraDessaMusica.mus;
    let letraFinal = [];
    
    if (letraDessaMusica == undefined) {
        list.innerHTML = "Música não encontrada.";
    } else {
        letraFinal = letraDessaMusica[0];
    
        list.innerHTML = "<strong>" + nomeDaMusica + "</strong>" + "\n\n" + letraFinal.text;
    }
    
}
