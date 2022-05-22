const params_weather = {
    base: "https://weatherdbi.herokuapp.com/data/weather/",
    city: "Toronto"
}
const params_IP = {
    base: "https://ipapi.co/json/"
}

const dayWeek = document.querySelector('[data-day-week="day_week"]')
const city = document.querySelector('[data-city="name"]')
const region = document.querySelector('[data-region="region"]');
const icon = document.querySelector('[data-icon="weather_icons"]');
const weather_description = document.querySelector('[data-description="weather_description"]');
const temperature = document.querySelector('[data-temp="temperature"]');
const wind_speed = document.querySelector('[data-wind="wind_speed"]');
const precip = document.querySelector('[data-precip="precip"]');
const feelslike = document.querySelector('[data-feelslike="feelslike"]');
const humidity = document.querySelector('[data-humidity="humidity"]');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const inputEle = document.getElementById('enter');

let cidade, estado, ehPesquisa;

search_button.addEventListener('click', function () {
    searchByInput(search_input.value, cidade, estado);
});
search_input.addEventListener('keyup', function (e) {
    var key = e.key;
    if (key == 'Enter') {
        searchByInput(search_input.value, cidade, estado);
        console.log(key)
    }
});


getIPLocation()
function getIPLocation() {
    fetch(`${params_IP.base}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            cidade = response.city;
            estado = response.region;
            searchResults(response.latitude, response.longitude, cidade, estado)
        });
}

function searchResults(lat, lon, cidade, estado) {
    fetch(`${params_weather.base}${lat},${lon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            console.log(response)
            ehPesquisa = false;
            displayResults(response, cidade, estado, ehPesquisa)
        });
}

function searchByInput(city, cidade, estado) {
    fetch(`${params_weather.base}${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            console.log(response)
            ehPesquisa = true;
            displayResults(response, cidade, estado, ehPesquisa)
        });
}

function displayResults(weather, cidade, estado, ehPesquisa) {
    if (!ehPesquisa) {
        city.innerText = `${cidade} - ${estado}`;
    } else {
        city.innerText = `${weather.region}`;
    };
    let now = new Date();
    dayWeek.innerText = dateBuilder(now);
    icon.src = `${weather.currentConditions.iconURL}`;
    temperature.innerHTML = weather.currentConditions.temp.c;
    weather_description.innerHTML = weather.currentConditions.comment;
    wind_speed.innerHTML = weather.currentConditions.wind.km;
    precip.innerHTML = weather.currentConditions.precip;
    humidity.innerHTML = weather.currentConditions.humidity;
}

function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let day = days[d.getDay()]; //getDay: 0-6
    return `${day}`;
}

// container_temp.addEventListener('click', changeTemp)
// function changeTemp() {
//     temp_number_now = temp_number.innerHTML

//     if (temp_unit.innerHTML === "°c") {
//         let f = (temp_number_now * 1.8) + 32
//         temp_unit.innerHTML = "°f"
//         temp_number.innerHTML = Math.round(f)
//     }
//     else {
//         let c = (temp_number_now - 32) / 1.8
//         temp_unit.innerHTML = "°c"
//         temp_number.innerHTML = Math.round(c)
//     }
// }