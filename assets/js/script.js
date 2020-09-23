var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var citySearchTerm = document.querySelector("#city-search-term");
var todayWeather = document.querySelector("weather-today");
var date = moment().format("MM/DD/YYYY");
    console.log(date);

var userCityWeather = function(city) {
    // format the weather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3de14c38e879f2f92ac5f20f010dd23e";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayCityWeather(data, city);
        });
    });
};



var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var cityName = cityInputEl.value.trim();

    if (city) {
        userCityWeather(cityName);
        cityInputEl.value = "";
    }

    console.log(event);
};

var displayCityWeather = function(weather, searchTerm) {
    console.log(weather);
    console.log(searchTerm);
    

    // clear old content
    weatherContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm + " (" + date + ")";
    
    var tempEl = document.createElement("h4");
    tempEl.textContent = "Temperature: " + weather;
    citySearchTerm.appendChild(tempEl);

    var humidityEl = document.createElement("h4");
    humidityEl.textContent = "Humidity: ";
    citySearchTerm.appendChild(humidityEl);

    var windSpeedEl = document.createElement("h4");
    windSpeedEl.textContent = "Wind Speed: ";
    citySearchTerm.appendChild(windSpeedEl);

    var uvIndexEl = document.createElement("h4");
    uvIndexEl.textContent = "UV Index: ";
    citySearchTerm.appendChild(uvIndexEl);

    
   
    

    
    
};


cityFormEl.addEventListener("submit", formSubmitHandler);
