<?php
$apiKey = "ff46499780e490138710451eed3d6b14";

$searchBox = isset($_POST['city']) ? $_POST['city'] : '';
$searchBtn = isset($_POST['search']) ? $_POST['search'] : '';

function CheckWeather($city, $apiKey) {
	$response = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$city."&appid=".$apiKey."&units=metric");
	$data = json_decode($response, true);
	if ($data["cod"] == "404") {
		echo "<div class='error' style='display:block;'>City not found.</div>";
		echo "<div class='weather' style='display:none;'></div>";
	} else {
		$dt = $data["dt"];
		$date = date("Y-m-d H:i:s", $dt);
		$dayOfWeek = date("l", $dt);
		$dateString = date("Y-m-d, l", $dt);

		echo "<div class='city'>".$data["name"]."</div>";
		echo "<div class='temp'>".round($data["main"]["temp"])."°C</div>";
		echo "<div class='humidity'>".$data["main"]["humidity"]."%</div>";
		echo "<div class='wind'>".$data["wind"]["speed"]."km/h</div>";
		if ($data["weather"][0]["main"] == "Clouds") {
			echo "<img src='UtsabShrestha_2329761/clouds.png' class='weather-icon'>";
		} else if ($data["weather"][0]["main"] == "Clear") {
			echo "<img src='UtsabShrestha_2329761/clear.png' class='weather-icon'>";
		} else if ($data["weather"][0]["main"] == "Rain") {
			echo "<img src='UtsabShrestha_2329761/rain.png' class='weather-icon'>";
		} else if ($data["weather"][0]["main"] == "Drizzle") {
			echo "<img src='UtsabShrestha_2329761/drizzle.png' class='weather-icon'>";
		} else if ($data["weather"][0]["main"] == "Mist") {
			echo "<img src='UtsabShrestha_2329761/mist.png' class='weather-icon'>";
		}
		echo "<div class='dt'>Date and Day:<br>".$dateString." UTC</div>";
		echo "<div class='weather' style='display:block;'></div>";
		echo "<div class='error' style='display:none;'></div>";
	}
}

if ($searchBtn && $searchBox) {
	CheckWeather($searchBox, $apiKey);
}

function checkRainfall($humidity) {
	if ($humidity <= 0) {
		$rainfallCondition = "rainfall N/A.";
	} else if ($humidity > 0 && $humidity <= 50) {
		$rainfallCondition = "Light rainfall.";
	} else if ($humidity > 51 && $humidity <= 90) {
		$rainfallCondition = "Moderate rainfall.";
	} else {
		$rainfallCondition = "Heavy rainfall.";
	}
	
	echo "<span id='rainfall-condition'>".$rainfallCondition."</span>";
}

checkRainfall(30);
?>
