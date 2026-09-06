import "./style.css";

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");

const loading = document.getElementById("loading");

const weatherCard = document.getElementById("weather-card");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temp = document.getElementById("temp");
const conditions = document.getElementById("conditions");

const apiKey = "WWFDD6U4G65S9P5GNQAEYDYDV";

searchButton.addEventListener("click", (e) => {
	let city = cityInput.value;
	getWeather(city);
});

async function getWeather(location) {
	try {
		weatherCard.style.display = "none";
		loading.style.display = "block";
		let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(`${location} could not be found!`);
		}
		let json = await response.json();
		cityName.textContent = json.resolvedAddress;
		temp.textContent = `${json.days[0].temp} °C`;
		conditions.textContent = json.currentConditions.conditions;
		weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${json.currentConditions.icon}.svg`;
		weatherIcon.style.display = "block";
		document.body.className = json.currentConditions.icon;
		weatherCard.style.display = "flex";
		loading.style.display = "none";
	} catch (error) {
		cityName.textContent = error.message;
		temp.textContent = `-- °C`;
		conditions.textContent = "--";
		loading.style.display = "none";
		weatherCard.style.display = "flex";
	}
}
