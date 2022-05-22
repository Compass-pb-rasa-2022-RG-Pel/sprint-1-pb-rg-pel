const express = require('express');
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen("8080", ()=>{
    console.log("testando a porta 8080")
})


async function loadRepositories(name) {
    var script = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000';

    const response = await fetch(script);

    const repositories = await response.json();

    return repositories;

}

async function createList(name) {

    let repositoriesList = await loadRepositories(name);

    repositoriesList.photos.map(repository => {
        let item = document.createElement('li');
        list.appendChild(item);
        item.insertAdjacentHTML('afterbegin', `Nome: ${repository.camera.full_name}`);
        item.insertAdjacentHTML('beforeend', `<img src="${repository.img_src}">`);
    })
}
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000