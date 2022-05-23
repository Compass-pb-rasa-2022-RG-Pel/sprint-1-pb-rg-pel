listNames();

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

async function loadRepositories(nome) {
    var script = 'https://pokeapi.co/api/v2/pokemon/' + nome;
    const response = await fetch(script);
    const repositories = await response.json();
    return repositories;
}

async function createList(nome) {
    atributoHP.innerHTML = "";
    atributoImagem.innerHTML = "";
    atributoAtaqueEspecial.innerHTML = "";
    atributoAtaque.innerHTML = "";
    atributoDefesaEspecial.innerHTML = "";
    atributoVelocidade.innerHTML = "";
    atributoDefesa.innerHTML = "";
    atributoNome.innerHTML = "";
    
    nome = nome.toLowerCase();

    let repositoriesList = await loadRepositories(nome);
    repositoriesList.forms.map(repository => {
        let item = document.createElement('strong');
        atributoNome.appendChild(item);
        item.insertAdjacentHTML('afterbegin', `NOME: ${repository.name.toUpperCase()}`);
    })

    let i = 0;
    repositoriesList.stats.map(power => {
        let item = document.createElement('li');
        i++;
        if (i == 1) {
            atributoHP.appendChild(item);
            item.insertAdjacentHTML('beforeend', `HP: ${power.base_stat}`);
        }
        if (i == 2) {
            atributoAtaque.appendChild(item);
            item.insertAdjacentHTML('beforeend', `ATAQUE: ${power.base_stat}`);
        }
        if (i == 3) {
            atributoDefesa.appendChild(item);
            item.insertAdjacentHTML('beforeend', `DEFESA: ${power.base_stat}`);
        }
        if (i == 4) {
            atributoAtaqueEspecial.appendChild(item);
            item.insertAdjacentHTML('beforeend', `ATAQUE ESPECIAL: ${power.base_stat}`);
        }
        if (i == 5) {
            atributoDefesaEspecial.appendChild(item);
            item.insertAdjacentHTML('beforeend', `DEFESA ESPECIAL: ${power.base_stat}`);
        }
        if (i == 6) {
            atributoVelocidade.appendChild(item);
            item.insertAdjacentHTML('beforeend', `VELOCIDADE: ${power.base_stat}`);
        }
    })

    let imagem = repositoriesList.sprites.other.home.front_default;
    let item = document.createElement('center');
    atributoImagem.appendChild(item);
    item.insertAdjacentHTML('afterbegin', `<img src="${imagem}">`);
}


async function listNames() {

    for (i = 1; i < 1000; i++) {
        listName = 'https://pokeapi.co/api/v2/pokemon/' + i;
        responseName = await fetch(listName);
        repositoriesName = await responseName.json();

        nameInList = repositoriesName;

        list.innerHTML += `<li>${nameInList.name}</li>`;
       
    }

}
