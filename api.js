/*function buscaCep() {
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
	}
};
    let inputCep = document.querySelector('input[name=cep]');
    let cep = inputCep.value.replace('-', '');
        fetch('https://viacep.com.br/ws/' + cep + '/json', options)
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json);
                preencheCampos(json);
                    let item = document.createElement('p');
                    item.insertAdjacentHTML('afterbegin', `<strong>endereco: ${json.logradouro}</strong>`);
                })

            }
        function preencheCampos(json) {
            document.querySelector('input[name=endereco]').value = json.logradouro;
            document.querySelector('input[name=bairro]').value = json.bairro;
            document.querySelector('input[name=complemento]').value = json.complemento;
            document.querySelector('input[name=cidade]').value = json.localidade;
            document.querySelector('input[name=estado]').value = json.uf;
        }
*/
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world everybody!');
})

app.listen(8080, function () {
  console.log('Starting hello-world server...');
})