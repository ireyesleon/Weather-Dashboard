var APIKey = "75d7da5e343a08d2c004e2b86c1b912a";
var cityInputEl = document.querySelector("#search-city");
var cityDetails = document.querySelector("#city-details");
var dayOne = document.querySelector("#day1");
var dayTwo = document.querySelector("#day2");
var dayThree = document.querySelector("#day3");
var dayFour = document.querySelector("#day4");
var dayFive = document.querySelector("#day5");
var weatherContainerEl = document.querySelector(".weather-container")
var fetchButton = document.querySelector(".search-button");

var currentDate = moment();


//Function to fetch weather info
function getCityWeather() {
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=75d7da5e343a08d2c004e2b86c1b912a&units=metric&exclude=hourly,daily";
    fetch(queryUrl)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 404) {
          responseText.textContent = "Oops, something went wrong!"
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.wind.speed);
        console.log(data.main.humidity);
        // console.log(data.main.humidity);
          var cityEl = document.createElement("div")
          cityEl.textContent = data.name + currentDate;
          cityEl.setAttribute ("id", "city-name");
          cityDetails.append(cityEl);
          var tempEl = document.createElement("div")
          tempEl.textContent = "Temp: " + data.main.temp + "°C";
          cityDetails.append(tempEl);
          var windEl = document.createElement("div")
          windEl.textContent = "Wind: " + data.wind.speed + " MPH";
          cityDetails.append(windEl);
          var humidityEl = document.createElement("div")
          humidityEl.textContent = "Humidity: " + data.main.humidity + " %";
          cityDetails.append(humidityEl);
      });
  }
  
getCityWeather();

//Function to fetch weather forecast
function getCityForecast() {
  var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=75d7da5e343a08d2c004e2b86c1b912a&units=metric&cnt=33";
  fetch(queryUrl)
    .then(function (response) {
      console.log(response.status);
      if (response.status === 404) {
        responseText.textContent = "Oops, something went wrong!"
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Day 1
        var dateEl1 = document.createElement("h4")
        dateEl1.textContent = data.list[0].dt_txt;
        dayOne.append(dateEl1);
        var tempEl1 = document.createElement("h4")
        tempEl1.textContent = "Temp: " + data.list[0].main.temp + "°C";
        dayOne.append(tempEl1);
        var windEl1 = document.createElement("h4")
        windEl1.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
        dayOne.append(windEl1);
        var humidityEl1 = document.createElement("h4")
        humidityEl1.textContent = "Humidity: " + data.list[0].main.humidity + " %";
        dayOne.append(humidityEl1);

      // Day 2
        var dateEl2 = document.createElement("h4")
        dateEl2.textContent = data.list[8].dt_txt;
        dayTwo.append(dateEl2);
        var tempEl2 = document.createElement("h4")
        tempEl2.textContent = "Temp: " + data.list[8].main.temp + "°C";
        dayTwo.append(tempEl2);
        var windEl2 = document.createElement("h4")
        windEl2.textContent = "Wind: " + data.list[8].wind.speed + " MPH";
        dayTwo.append(windEl2);
        var humidityEl2 = document.createElement("h4")
        humidityEl2.textContent = "Humidity: " + data.list[8].main.humidity + " %";
        dayTwo.append(humidityEl2);

      // Day 3
        var dateEl3 = document.createElement("h4")
        dateEl3.textContent = data.list[16].dt_txt;
        dayThree.append(dateEl3);
        var tempEl3 = document.createElement("h4")
        tempEl3.textContent = "Temp: " + data.list[16].main.temp + "°C";
        dayThree.append(tempEl3);
        var windEl3 = document.createElement("h4")
        windEl3.textContent = "Wind: " + data.list[16].wind.speed + " MPH";
        dayThree.append(windEl3);
        var humidityEl3 = document.createElement("h4")
        humidityEl3.textContent = "Humidity: " + data.list[16].main.humidity + " %";
        dayThree.append(humidityEl3);

      // Day 4
        var dateEl4 = document.createElement("h4")
        dateEl4.textContent = data.list[24].dt_txt;
        dayFour.append(dateEl4);
        var tempEl4 = document.createElement("h4")
        tempEl4.textContent = "Temp: " + data.list[24].main.temp + "°C";
        dayFour.append(tempEl4);
        var windEl4 = document.createElement("h4")
        windEl4.textContent = "Wind: " + data.list[24].wind.speed + " MPH";
        dayFour.append(windEl4);
        var humidityEl4 = document.createElement("h4")
        humidityEl4.textContent = "Humidity: " + data.list[24].main.humidity + " %";
        dayFour.append(humidityEl4);

      // Day 5
        var dateEl5 = document.createElement("h4")
        dateEl5.textContent = data.list[32].dt_txt;
        dayFive.append(dateEl5);
        var tempEl5 = document.createElement("h4")
        tempEl5.textContent = "Temp: " + data.list[32].main.temp + "°C";
        dayFive.append(tempEl5);
        var windEl5 = document.createElement("h4")
        windEl5.textContent = "Wind: " + data.list[32].wind.speed + " MPH";
        dayFive.append(windEl5);
        var humidityEl5 = document.createElement("h4")
        humidityEl5.textContent = "Humidity: " + data.list[32].main.humidity + " %";
        dayFive.append(humidityEl5);
    });
}

getCityForecast();

// fetchButton.addEventListener("submit", getCityWeather);


//Function to display weather info
// function displayCityWeather() {
//   var tempEl = document.createElement('div');
//   tempEl = 
// }



// Function to confirm the city
// var citySubmitHandler = function (event) {
//     event.preventDefault();
  
//     var citySearch = cityInputEl.value.trim();
  
//     if (citySearch) {
//       getCityWeather(city);
  
//       weatherContainerEl.textContent = '';
//       cityInputEl.value = '';
//     } else {
//       alert('Please enter a City Name');
//     }
//   };


// var getCityWeather = function (city) {
//     var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=75d7da5e343a08d2c004e2b86c1b912a";
  
//     fetch(queryUrl)
//       .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function (data) {
//             console.log(data);
//             displayRepos(data, city);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to OpenWeather App');
//       });
//   };

// // // Event listener for submit button
// fetchButton.addEventListener("click", citySubmitHandler);