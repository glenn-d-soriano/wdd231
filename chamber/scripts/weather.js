// Select current weather elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherDetails = document.querySelector('#weather-details'); // ✅ Fix

// URLs
const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=49.8951&lon=-97.1384&units=metric&appid=f6b9b7107d9d8bf0a30396ca5aa27cf5';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.8951&lon=-97.1384&units=metric&appid=f6b9b7107d9d8bf0a30396ca5aa27cf5';

// Fetch and display current weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    const high = data.main.temp_max.toFixed(1);
    const low = data.main.temp_min.toFixed(1);
    const humidity = data.main.humidity;

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (weatherDetails) {
        weatherDetails.innerHTML = `
            <p><strong>High:</strong> ${high}&deg;C</p>
            <p><strong>Low:</strong> ${low}&deg;C</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Sunrise:</strong> ${sunrise}</p>
            <p><strong>Sunset:</strong> ${sunset}</p>
        `;
    }
}

// Fetch and display 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data.list);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayForecast(forecastList) {
    const forecastContainer = document.getElementById('forecast-cards');
    forecastContainer.innerHTML = '';

    // Filter for 12:00 PM forecasts and take next 3
    const dailyForecasts = forecastList.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const icon = forecast.weather[0].icon;
        const desc = forecast.weather[0].description;
        const temp = forecast.main.temp.toFixed(1);

        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `
            <h4>${day}</h4>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
            <p>${temp}&deg;C</p>
        `;

        forecastContainer.appendChild(card);
    });
}

// DOM content: year, last modified, nav, dark mode
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
});

const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Run all
fetchCurrentWeather();
fetchForecast();
