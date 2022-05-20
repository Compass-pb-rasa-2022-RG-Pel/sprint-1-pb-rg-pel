
async function loadRepositories() {
    let url = 'https://api.github.com/orgs/uol/repos';

    const response = await fetch(url);

    const repositories = await response.json();

    return repositories;

}

async function creatList() {

    let repositoriesList = [];

    repositoriesList = await loadRepositories();

    repositoriesList.map(repository => {

        let item = document.createElement('li');

        list.appendChild(item);

        item.insertAdjacentHTML('afterbegin', `<strong>Nome: ${repository.full_name}</strong>`);
        item.insertAdjacentHTML('beforeend', `<br><p>Descrição: ${repository.description}</p>`);
        item.insertAdjacentHTML('beforeend', `<a href='${repository.html_url}' target='_blank'>Acesse</a>`);
    })
}