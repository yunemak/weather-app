import "./style.css";

console.log("deneme");

const apiKey = "WWFDD6U4G65S9P5GNQAEYDYDV";
const location = "Ankara";

let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
