const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const API_KEY = "b0f3d5450d3f3a364bd62cf12115b6ce";

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent
    try {
      const weatherData = await getFetchData(city);
      displayWeatherData(weatherData);
      
    } catch (error) {
     console.log(error);
     
    }
    cityInput.value =""; // clear input field
})
async function getFetchData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(apiurl);

    if (!response.ok) {
        const message = document.querySelector('.errorshow');
        //const error = throw new Error("City Aman Raj is not found");
        const error = new Error("City is not found");
        message.textContent = error.message;
        throw error;
    }
    const data = await response.json();
    return data; 

}
function displayWeatherData(data) {
    const cityNameDisplay = document.querySelector('.cityName');
    const temperatureDisplay = document.querySelector('.temp-txt');
    const conditionDisplay = document.querySelector('.condition-txt');
    const humiditvalueDispaly = document.querySelector('.humidity-value-txt');
    const windvalueDisplay = document.querySelector('.wind-value-txt');
    

    console.log(data);

    const { name, main, weather, wind } = data;
    cityNameDisplay.textContent =name;
    temperatureDisplay.textContent = `${main.temp}°C`;
    conditionDisplay.textContent = weather[0].description;
    humiditvalueDispaly.textContent = `${main.humidity}%`;
    windvalueDisplay.textContent = `${wind.speed}km/h`;

    // if (main.temp > 25) {
    //     document.weather-icon.style.img = "url('images/warm.jpg')";
    // } else if (main.temp < 25 && main.temp > 15) {
    //     document.body.style.weather-icon = "url('images/mild.jpg')";
    // } else {
    //     document.body.style.weather-icon = "url('images/cold.jpg')";
    // }       

    
}
//Date
function displayCurrentDate() {
    const dateDisplay = document.querySelector('.current-date-txt');
    let myDate = new Date()
    console.log(myDate.toDateString());
    dateDisplay.textContent = myDate.toDateString();
}
displayCurrentDate();

// Assuming you have the HTML you provided in your document.

// // Function to change the weather icon
// function changeWeatherIcon(newIconURL) {
//     // 1. Get the image element.  Use a more specific selector if needed.
//     const weatherIconImg = document.querySelector('.weather-icon'); // Or, document.getElementById('yourImageId') if you have an ID
  
//     // 2. Check if the element exists
//     if (weatherIconImg) {
//       // 3. Change the 'src' attribute
//       weatherIconImg.src = newIconURL;
//     } else {
//       console.error("Weather icon image element not found.");
//     }
//   }
  
//   changeWeatherIcon("https://www.weatherbit.io/static/img/icons/r01d.png");
//   const iconMap = {
//     "01d": "https://www.weatherbit.io/static/img/icons/c01d.png", // Clear day
//     "01n": "https://www.weatherbit.io/static/img/icons/c01n.png", // Clear night
//     "02d": "https://www.weatherbit.io/static/img/icons/c02d.png", // Few clouds day
//     "02n": "https://www.weatherbit.io/static/img/icons/c02n.png", // Few clouds night
//     "03d": "https://www.weatherbit.io/static/img/icons/c03d.png", // Scattered clouds day
//     "03n": "https://www.weatherbit.io/static/img/icons/c03n.png", // Scattered clouds night
//     "04d": "https://www.weatherbit.io/static/img/icons/c04d.png", // Broken clouds day
//     "04n": "https://www.weatherbit.io/static/img/icons/c04n.png", // Broken clouds night
//     "09d": "https://www.weatherbit.io/static/img/icons/r03d.png", // Shower rain day
//     "09n": "https://www.weatherbit.io/static/img/icons/r03n.png", // Shower rain night
//     "10d": "https://www.weatherbit.io/static/img/icons/r01d.png", // Rain day
//     "10n": "https://www.weatherbit.io/static/img/icons/r01n.png", // Rain night
//     "11d": "https://www.weatherbit.io/static/img/icons/t01d.png", // Thunderstorm day
//     "11n": "https://www.weatherbit.io/static/img/icons/t01n.png", // Thunderstorm night
//     "13d": "https://www.weatherbit.io/static/img/icons/s01d.png", // Snow day
//     "13n": "https://www.weatherbit.io/static/img/icons/s01n.png", // Snow night
//     "50d": "https://www.weatherbit.io/static/img/icons/a01d.png", // Mist day
//     "50n": "https://www.weatherbit.io/static/img/icons/a01n.png", // Mist night
// };

// function changeWeatherIcon(newIconURL) {
//     const weatherIconImg = document.querySelector('.weather-summary-img');
//     if (weatherIconImg) {
//         weatherIconImg.src = newIconURL;
//     } else {
//         console.error("Weather icon image element not found.");
//     }
// }

// function changeWeatherIconByCode(weatherCode) {
//     const iconURL = iconMap[weatherCode];
//     if (iconURL) {
//         changeWeatherIcon(iconURL);
//     } else {
//         console.warn("No icon found for weather code:", weatherCode);
//         changeWeatherIcon("https://www.weatherbit.io/static/img/icons/u50d.png"); // Default unknown icon
//     }
// }

// // async function fetchWeatherData() {
// //     try {
// //         const apiKey = 'API_KEY ';  // Replace with your actual API key
// //         const city = 'city';        // Replace with the city you want weather for
// //         const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

// //         const response = await fetch(apiUrl);

// //         if (!response.ok) {
// //             throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();

// //         if (data.data && data.data.length > 0) {
// //             const weatherCode = data.data[0].weather.icon; // Adjust based on your API response
// //             changeWeatherIconByCode(weatherCode);
// //         } else {
// //             console.warn("No weather data found in API response.");
// //         }

// //     } catch (error) {
// //         console.error("Error fetching weather data:", error);
// //     }
// // }

// // // Call fetchWeatherData when the page loads
// // document.addEventListener('DOMContentLoaded', fetchWeatherData);