import "./style.css";

console.log("deneme");

const apiKey = "WWFDD6U4G65S9P5GNQAEYDYDV";
const location = "Ankara";

let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

getWeather();

async function getWeather() {
	try {
		let response = await fetch(url);
		let json = await response.json();
		console.log(`Şehir adı: ${json.resolvedAddress}`);
		console.log(`Anlık sıcaklık: ${json.currentConditions.temp}`);
		console.log(`Hava durumu: ${json.currentConditions.conditions}`);
		console.log(`Bugün en yüksek sıcaklık: ${json.days[0].tempmax}`);
		console.log(`Bugün en düşük sıcaklık: ${json.days[0].tempmin}`);
	} catch (error) {
		console.log("Some error occured");
	}
}
