const apiKey = '924fe80802ee4d51abd41845242608'; 

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    try {
        const response = await fetch(url);
        console.log(response,'response')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
