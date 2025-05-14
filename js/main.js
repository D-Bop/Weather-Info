// 93ab0a1015961e5800a40c1f9c848dd8
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const searchBtn = document.getElementById('searchIcon')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() -1;
let year = dateObj.getUTCFullYear();


date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById('app');
const getWeather = async () => {
    try {
        const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=93ab0a1015961e5800a40c1f9c848dd8&units=metric`, 
            {
                headers: {
                    Accept: "application/json"
                }
            } 
        );
        const weatherData = await weatherDataFetch.json();
        console.log(weatherData)
        city.innerHTML = `${weatherData.name}`
        description.innerHTML = `${weatherData.weather[0].main}`
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C<h2/>`
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`
    } 
    catch (error) {
        console.log(error)
    }
}
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        getWeather();
    }
})
searchBtn.addEventListener("click", getWeather);