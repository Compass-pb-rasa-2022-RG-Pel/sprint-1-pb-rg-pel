const filme = document.getElementById("filme");

filme.addEventListener("blur",(e)=>{
    console.log(filme.value);
    const options ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.themoviedb.org/3/search/movie?query=${filme.value}&api_key=6357cecb3e96ad809c27f13a9a84d7f9&language=pt-BR`,options)
    .then(response=>{ response.json()
        .then(data => {
            console.log(data)
            document.querySelector("#resultado").innerHTML = "Resultados encontrados: \n";
            let lista = "<tr><td>TÍTULO</td><td>SINOPSE</td><td>DATA DE LANÇAMENTO</td></tr>";
            for(i=0; i<data.results.length;i++){
                console.log("Título "+ i + ": " + data.results[i].title);
                lista += "<tr>";
                lista += "<td>" + data.results[i].title+ "</td>";
                lista += "<td>" + data.results[i].overview+ "</td>";
                lista += "<td>" + data.results[i].release_date + "</td>";
                lista += "</tr>";
            }
            document.querySelector("#lista").innerHTML = lista;
        }) 
            
    })
    .catch(e => console.log('Deu erro: '+e,message));
})
const API_key = '6357cecb3e96ad809c27f13a9a84d7f9';

//FILMES MAIS BEM AVALIADOS PELO TMDB
function melhores(){
    const options2 ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6357cecb3e96ad809c27f13a9a84d7f9&language=pt-BR&page=1`,options2)
    .then(response=>{ response.json()
        .then(data => {
            document.querySelector("#resultado").innerHTML = "Filmes melhores avaliados pelo TMDB: \n";
            let lista = "<tr><td>TÍTULO</td><td>SINOPSE</td><td>DATA DE LANÇAMENTO</td></tr>";
            for(i=0; i<data.results.length;i++){
                console.log("Título "+ i + ": " + data.results[i].title);
                lista += "<tr>";
                lista += "<td>" + data.results[i].title+ "</td>";
                lista += "<td>" + data.results[i].overview+ "</td>";
                lista += "<td>" + data.results[i].release_date + "</td>";
                lista += "</tr>";
            }
            document.querySelector("#lista").innerHTML = lista;
        }) 
            
    })
    .catch(e => console.log('Deu erro: '+e,message));
}



