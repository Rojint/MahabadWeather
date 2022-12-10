let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },

  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let cityName = prompt("Enter your city");
show();

function show() {
  if (weather[cityName] == undefined) {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
    );
  } else {
    alert(
      `It is currently ${Math.round(weather[cityName].temp)}°C (${Math.round(
        (weather[cityName].temp * 9) / 5 + 32
      )}°F)  in ${cityName.toUpperCase()} with a humidity of ${
        weather[cityName].humidity
      }`
    );
  }
}

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
