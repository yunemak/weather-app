import "./style.css";

const weatherCard = document.getElementById("weather-card");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const conditions = document.getElementById("conditions");

console.log("deneme");

const apiKey = "WWFDD6U4G65S9P5GNQAEYDYDV";

// getWeather("Ankaraaaaaaaa");
getWeather("İstanbul");

async function getWeather(location) {
	try {
		let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(`The city ${location} cannot be found!`);
		}
		let json = await response.json();
		cityName.textContent = json.resolvedAddress;
		temp.textContent = `${json.days[0].temp} °C`;
		conditions.textContent = json.currentConditions.conditions;
		console.log(`Bugün en yüksek sıcaklık: ${json.days[0].tempmax}`);
		console.log(`Bugün en düşük sıcaklık: ${json.days[0].tempmin}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}
