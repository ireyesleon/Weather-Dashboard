var APIKey = "75d7da5e343a08d2c004e2b86c1b912a";
var cityDetails = document.querySelector("#city-details");
var dayOne = document.querySelector("#day1");
var dayTwo = document.querySelector("#day2");
var dayThree = document.querySelector("#day3");
var dayFour = document.querySelector("#day4");
var dayFive = document.querySelector("#day5");
var weatherContainerEl = document.querySelector(".weather-container")
var fetchButton = document.getElementById("search-button");

var cityEl = document.createElement("div");
var tempEl = document.createElement("div");
var windEl = document.createElement("div");
var humidityEl = document.createElement("div");

var cityHistory = document.getElementById("city-history");
var cityStorage = [];

var currentDate = moment().format("LL");

//Function to fetch weather info
function getCityWeather(city) {
    cityDetails.innerHTML = "";
    var queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&exclude=hourly,daily`;
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
          var icon = document.createElement("img");
          var iconJSON = (data.weather[0].icon);
          var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
          icon.src = iconURL;
          cityEl.textContent = data.name + ", " + currentDate;
          cityEl.setAttribute ("id", "city-name");
          cityDetails.append(cityEl);
          cityDetails.append(icon);
          tempEl.textContent = "Temp: " + data.main.temp + "°C";
          tempEl.setAttribute ("id", "white");
          cityDetails.append(tempEl);
          windEl.textContent = "Wind: " + data.wind.speed + " MPH";
          windEl.setAttribute ("id", "white");
          cityDetails.append(windEl);
          humidityEl.textContent = "Humidity: " + data.main.humidity + " %";
          humidityEl.setAttribute ("id", "white");
          cityDetails.append(humidityEl);
      });
  }
  

//Function to fetch weather forecast
function getCityForecast(city) {
  dayOne.innerHTML = "";
  dayTwo.innerHTML = "";
  dayThree.innerHTML = "";
  dayFour.innerHTML = "";
  dayFive.innerHTML = "";
  //Add the other days here
  var queryUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=metric&cnt=33`;
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
        dateEl1.textContent = data.list[0].dt_txt.split(" ")[0];
        dayOne.append(dateEl1);
        var icon = document.createElement("img");
        var iconJSON = (data.list[0].weather[0].icon);
        var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
        icon.src = iconURL;
        dayOne.append(icon);
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
        dateEl2.textContent = data.list[8].dt_txt.split(" ")[0];
        dayTwo.append(dateEl2);
        var icon = document.createElement("img");
        var iconJSON = (data.list[8].weather[0].icon);
        var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
        icon.src = iconURL;
        dayTwo.append(icon);
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
        dateEl3.textContent = data.list[16].dt_txt.split(" ")[0];
        dayThree.append(dateEl3);
        var icon = document.createElement("img");
        var iconJSON = (data.list[16].weather[0].icon);
        var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
        icon.src = iconURL;
        dayThree.append(icon);
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
        dateEl4.textContent = data.list[24].dt_txt.split(" ")[0];
        dayFour.append(dateEl4);
        var icon = document.createElement("img");
        var iconJSON = (data.list[24].weather[0].icon);
        var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
        icon.src = iconURL;
        dayFour.append(icon);
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
        dateEl5.textContent = data.list[32].dt_txt.split(" ")[0];
        dayFive.append(dateEl5);
        var icon = document.createElement("img");
        var iconJSON = (data.list[32].weather[0].icon);
        var iconURL = (`https://openweathermap.org/img/wn/${iconJSON}@2x.png`);
        icon.src = iconURL;
        dayFive.append(icon);
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

// Function to store cities,
// function storeCities(city) {
//   if ()
// }

//function to see iif theres somethiing in local storage

//fuction to get data from local storage and display it

fetchButton.addEventListener("click", function() {
  var cityInputEl = document.querySelector("#search-city").value;

  getCityWeather(cityInputEl);
  getCityForecast(cityInputEl);
});

