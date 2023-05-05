const apiKey="ff46499780e490138710451eed3d6b14";
const timeEl = document.getElementById('time');

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
const lastSixDaysBtn = document.querySelector(".last-six-days-btn");
const lastSixDaysData = document.querySelector(".last-six-days-data");
// Function to format date and time
function formatDate(date, format) {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const hoursIn12HrFormat = date.getHours() >= 13 ? date.getHours() % 12 : date.getHours();
	const minutes = date.getMinutes();
	const ampm = date.getHours() >= 12 ? "PM" : "AM";
	format = format.replace("DD", daysOfWeek[date.getDay()]);
	format = format.replace("MM", months[date.getMonth()]);
	format = format.replace("DD", date.getDate());
	format = format.replace("hh", hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat);
	format = format.replace("mm", minutes < 10 ? "0" + minutes : minutes);
	format = format.replace("a", ampm);
	return format;
  }
  
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
async function CheckWeather(city){
	const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid="+apiKey+"&units=metric");
	var data = await response.json();
	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display ="none";
	}else{
// This section is for the date and day
 	const{dt}=data;

   const date = new Date(dt * 1000);

 const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dateString = `${date.toLocaleDateString()}, ${dayOfWeek}`;
	
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
	document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
	// document.querySelector(".pressure").innerHTML=math.round(data.main.pressure) ;
	document.querySelector(".pressure").innerHTML=data.main.pressure + "%";

	if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "UtsabShrestha_2329761/clouds.png";
	}else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "UtsabShrestha_2329761/clear.png";
	}else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "UtsabShrestha_2329761/rain.png";
	}else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "UtsabShrestha_2329761/drizzle.png";
	}else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "UtsabShrestha_2329761/mist.png";
	}
	document.querySelector(".weather").style.display="block";
	document.querySelector(".error").style.display = "none";
	document.querySelector(".dt").innerText ="Date and Day:\n " + dateString + " UTC";
} 
}
searchBtn.addEventListener("click", ()=>{
	CheckWeather(searchBox.value)
})

//Rainfall section which is using if else condition statement
let rainfallConditionSpan = document.getElementById("rainfall-condition");

// Define a function to check the rainfall amount and set the condition accordingly
function checkRainfall(humidity) {
  let rainfallCondition;
  if (humidity <= 0) {
    rainfallCondition = "rainfall N/A.";
  } else if (humidity > 0 && humidity <= 50) {
    rainfallCondition = "Light rainfall.";
  } else if (humidity> 51 && humidity <= 90) {
    rainfallCondition = "Moderate rainfall.";
  } else {
    rainfallCondition = "Heavy rainfall.";
  }
  
  // Output the rainfall condition to the span element
  rainfallConditionSpan.innerHTML = rainfallCondition;
}

// Call the checkRainfall function with a rainfall amount (in millimeters)
checkRainfall(30);
CheckWeather( );

CheckWeather('Dhulikhel');