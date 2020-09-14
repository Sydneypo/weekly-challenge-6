var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
    console.log("button was clicked");

    cityName();
});


var cityName = function(city) {
    var cityInput = document.getElementById("city-name");
    cityInput = document.createElement("p");
    document.getElementById("city-input").appendChild(cityInput);
    document.textContent = cityInput.value;
    console.log(cityInput.value);

};


cityName();





// function initPage() {
//     var inputEl = document.getElementById("city-input");
//     var searchEl = document.getElementById("search-button");
//     var clearEl = document.getElementById("clear-history");
//     var nameEl = document.getElementById("city-name");
//     var currentTempEl = document.getElementById("temperature");
//     var currentHumidityEl = document.getElementById("humidity");
//     var currentWindEl = document.getElementById("humidity");
//     var currentUVEl = document.getElementById("UV-index");
//     var historyEl = document.getElementById("history");;
//     var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
//     console.log(searchHistory);

//     var apiKey = "3de14c38e879f2f92ac5f20f010dd23e";
    
//     function getWeather(cityName) {
//         let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
//         axios.get(queryURL).then(function(response) {
//             console.log(response);
//             var currentDate = new Date(response.formData.dt*1000);
//             console.log(currentDate);
//             var day = currentDate.getDate();
//             var month = currentDate.getMonth() + 1;
//             var year = currentDate.getFullYear();
//             cityInput.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
//             currentTemp.innerHTML = "Temperature:" + k2f(response.data.main.temp) + "&#176F";
//             currentHumididy.innerHTML = "Humidity: " + response.data.main.humidity + "%";
//             currentWind.innerHTML = "Wind Speed: " + response.data.wind.speed + "MPH";
//         let lat = response.data.coord.lat;
//         let lon = response.data.coord.lon;
//         let UVQueryUrl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&cnt=1";
//         axios.get(UVQueryUrl)
//         .then(function(response) {
//             let UVIndex = document.createElement ("span");
//             UVIndex.setAttribute("class", "badge badge-danger");
//             UVIndex.innerHTML = response.data[0].value;
//             currentUV.innerHTML = "UV Index: ";
//             currentUV.append(UVIndex);
//         });
//         let cityId = response.data.id;
//         let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + apiKey;
//         axios.get(forecastQueryURL)
//         .then(function(response) {
//             console.log(response);
//             var forecastEl = document.querySelectorAll(".forecast");
//             for (i = 0; i < forecastEl.length; i++) {
//                 forecastEl[i].innerHTML = "";
//                 var forecastIndex = i * 8 + 4;
//                 var forecastDate = new Date(response.data.list[forecastIndex].dt * 1000);
//                 var forecastMonth = forecastDate.getMonth() + 1;
//                 var forecastDateEl = document.createElement("p");
//                 forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
//                 forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
//                 forecastEl[i].append(forecastDateEl);
//                 var forecastWeatherEl = document.createElement("img");
//                 forecastWeatherEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
//                 forecastWeatherEl.setAttribute("alt", response.data.list[forecastIndex].weather[0].description);
//                 forecastEl[i].append(forecastWeatherEl);
//                 var forecastTempEl = document.createElement("p");
//                 forecastTempEl.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
//                 forecastEl[i].append(forecastTempEl);
//                 var forecastHumididyEl = document.createElement("p");
//                 forecastHumidityEl.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
//                 forecastEl[i].append(forecastHumididyEl);
//                 }
//             })
//         });

//     }
//     searchEl.addEventListener("click", function() {
//         var searchTerm = inputEl.value;
//         getWeather(searchTerm);
//         searchHistory.push(searchTerm);
//         localStorage.setItem("search", JSON.stringify(searchHistory));
//         renderSearchHistory();
//     })

//     clearEl.addEventListener("click", function() {
//         searchHistory = [];
//         renderSearchHistory();
//     })

//     function k2f(K) {
//         return Math.floor((K - 273.15) *1.8 + 32);
//     }

//     function renderSearchHistory() {
//         historyEl.innerHTML = "";
//         for (var i = 0; i < searchHistory.length; i++) {
//             var historyItem = document.createElement("input");
//             historyItem.setAttribute("type", "text");
//             historyItem.setAttribute("readonly", true);
//             historyItem.setAttribute("class", "form-control d-block bg-white");
//             historyItem.setAttribute("value", searchHistory[i]);
//             historyItem.addEventListener("click", function() {
//                 getWeather(historyItem.value);
//             })
//             historyEl.append(historyItem);
//         }
//     }

//     renderSearchHistory();
//     if(searchHistory.length > 0) {
//         getWeather(searchHistory[searchHistory.length - 1]);
//     }

// }

// initPage();






















