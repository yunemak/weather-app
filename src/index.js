import "./style.css";

console.log("deneme");

const apiKey = "WWFDD6U4G65S9P5GNQAEYDYDV";

getWeather("Ankaraaaaaaaa");
getWeather("İstanbul");

async function getWeather(location) {
	try {
		let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(`The city ${location} cannot be found!`);
		}
		let json = await response.json();
		console.log(`Şehir adı: ${json.resolvedAddress}`);
		console.log(`Anlık sıcaklık: ${json.currentConditions.temp}`);
		console.log(`Hava durumu: ${json.currentConditions.conditions}`);
		console.log(`Bugün en yüksek sıcaklık: ${json.days[0].tempmax}`);
		console.log(`Bugün en düşük sıcaklık: ${json.days[0].tempmin}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}
