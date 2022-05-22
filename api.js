const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen("8080", ()=>{
    console.log("testando a porta 8080")
})




function fetchGerador() {
    let imgDiv = document.querySelector(".imgDiv")
    imgDiv.innerHTML
    
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
        let imgUrl = data[0].url

        let imgElement = document.createElement("img")
        imgElement.setAttribute('src', `${imgUrl}`)
        imgElement.classList.add("showcase")

        let imgDiv = document.querySelector(".imgDiv")
        imgDiv.appendChild(imgElement)
    })
    .catch(err => console.log(err))
}