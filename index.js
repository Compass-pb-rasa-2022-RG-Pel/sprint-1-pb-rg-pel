const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen("8080", ()=>{
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

async function loadRepositories(name) {
    var script = 'https://api.github.com/orgs/'+name+'/repos';

    const response = await fetch(script);

    const repositories = await response.json();

    return repositories;

}

async function createList(name) {

    let repositoriesList = await loadRepositories(name);

    repositoriesList.map(repository => {

        let item = document.createElement('tr');

        list.appendChild(item);

        item.insertAdjacentHTML('afterbegin', `<table border="2">`);
        item.insertAdjacentHTML('beforeend', `<tr><td><a href='${repository.html_url}' target='_blank'><strong>Nome: ${repository.full_name}</strong></a></td></tr>`);
        item.insertAdjacentHTML('beforeend', `<br><tr><td><p>Descrição: ${repository.description}</p></td></tr><tr></tr>`);
        item.insertAdjacentHTML('beforeend', `</table>`);
    })
}