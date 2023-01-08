let now = new Date();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let monthNames = months[now.getMonth()];
let monthNumbers = now.getMonth();

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = dayNames[now.getDay()];

let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();
let dayNumber = now.getDate();
let time = now.toString().substr(16, 5);

let currentDate = `${day}, ${monthNames} ${dayNumber}, ${time}`;
console.log(currentDate);

let dateBox = document.querySelector("#date");
dateBox.innerHTML = currentDate;

let apiKey = "0f0a1fdebac7341b2c3o08605ff7bt89";
let searchInput = document.querySelector("#search-box");
let locationTitle = document.querySelector("#location");
let iconElement = document.querySelector("#icon_element");
let weatherDescription = document.querySelector("#weather-description");
let windElement = document.querySelector("#wind");
let pressureElement = document.querySelector("#pressure");
let humidityElement = document.querySelector("#humidity");

function showTemp(response) {
  console.log(response);
  let tempPlaceHolder = document.querySelector("#convert");
  if (response !== undefined) {
    tempPlaceHolder.innerHTML = Math.round(response.data.temperature.current);
    iconElement.setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    weatherDescription.innerHTML = response.data.condition.description;
    windElement.innerHTML = `${response.data.wind.speed}Km/h`;
    pressureElement.innerHTML = `${response.data.temperature.pressure}hpa`;
    humidityElement.innerHTML = response.data.temperature.humidity;
    locationTitle.innerHTML = ``;
  }
}
function saveCity(city) {
  let cityLocation = document.querySelector("#city-name");
  cityLocation.innerHTML = city.toUpperCase();

  let cityStatus = document.querySelector("#city-status");
  cityStatus.innerHTML = `Current Temperature:`;
}
function search(event) {
  event.preventDefault();
  // let searchInput = document.querySelector("#search-box");
  if (searchInput.value) {
    locationTitle.innerHTML = `Searching for ${searchInput.value}...`;
    let city = searchInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => showTemp(response));

    saveCity(city);
  } else {
    locationTitle.innerHTML = null;
    alert(`Please type a location`);
  }
}

let searchBox = document.querySelector("#search-form");
searchBox.addEventListener("submit", search);

//3

// function convertToF(event) {
//   event.preventDefault();
//   let convertBox = document.getElementById("#convert").value;
//   // cTemp = convertBox.value;
//   console.log(convertBox);
//   // convertBox.innerHTML = `( ${re} * 9) / 5 + 32 °F`;
// }
// let convertLink = document.querySelector("#convert-link-f");
// convertLink.addEventListener("click", convertToF);

// function convertToC(event) {
//   event.preventDefault();
//   let convertBox = document.querySelector("#convert");
//   convertBox.innerHTML = `6°C`;
// }
// let convertLink2 = document.querySelector("#convert-link-c");
// convertLink2.addEventListener("click", convertToC);
