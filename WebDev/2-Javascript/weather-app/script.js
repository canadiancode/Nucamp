// Configure dotenv
require('dotenv').config();

// retrieve data from .env file
const apiKey = process.env.WEATHER_API_KEY;

let city = null;

// Vancouver Location (hard coded)
const button = document.querySelector('button');
button.addEventListener('click', () => {
    city = document.querySelector('.input-field').value;
    document.querySelector('h4').textContent = city.toUpperCase();
    getWeather(city);
});

async function getWeather(selectedCity) {

    if (city === '') {
        alert('Please enter a city.');
        return;
    }

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=imperial`;

        const response = await fetch(url);

        // convert the package to json format
        const data = await response.json();
        console.log(data);

        // weather icon
        const iconElement = document.querySelector('#weather-icon');
        const iconLink = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        iconElement.src = iconLink;

        // temp
        const tempElement = document.querySelector('#weather-temp');
        tempElement.textContent = data.main.temp + '\u00B0';

        // description
        const descElement = document.querySelector('#weather-description');
        descElement.textContent = data.weather[0].description;

    } catch (error) {
        console.log(error);
        alert(`The weather for the city ${city} could not be found.`);

        // reset of the info since the city was not found

        document.querySelector('h4').textContent = '';

        const iconElement = document.querySelector('#weather-icon');
        iconElement.src = '';

        const tempElement = document.querySelector('#weather-temp');
        tempElement.textContent = '';

        const descElement = document.querySelector('#weather-description');
        descElement.textContent = '';

        document.querySelector('.input-field').value = '';

    }
}