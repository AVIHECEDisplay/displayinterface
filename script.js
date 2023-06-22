// Get user's geolocation
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Make API request to get weather information
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + 17.2831885 + '&lon=' + 78.7074515 + '&appid=9f6448ee768c686b6949d9a4c08125ef',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      displayWeather(data);
    },
    error: function(err) {
      console.log(err);
      showError();
    }
  });
}

function error(err) {
  console.log(err);
  showError();
}

function displayWeather(data) {
  var temperature = (data.main.temp - 273.15).toFixed(0); // Convert from Kelvin to Celsius
  var weatherDescription = data.weather[0].description;

  var weatherApp = document.getElementById('weather-app');
  weatherApp.innerHTML += '<p>Temperature:   ' + temperature + '°C</p>';
  weatherApp.innerHTML += '<h4>Weather: ' + weatherDescription + '</h4>';
}

function showError() {
  var weatherApp = document.getElementById('weather-app');
  weatherApp.innerHTML = '<h1>Simple Weather App</h1>';
  weatherApp.innerHTML += '<h3>Unable to retrieve weather information.</h3>';
}


