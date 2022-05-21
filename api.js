let generate_btn =  document.querySelector(".gerar_btn");

generate_btn.addEventListener("click", fetchGerador)

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