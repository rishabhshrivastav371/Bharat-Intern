const apiKey = "b80850391d33dfccf8f76120b35742eb";

function getWeather() {
  const cityName = document.querySelector(".search-bar").value;

  if (cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        updateWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
}

function updateWeather(data) {
  const iconElement = document.querySelector(".icon");
  const tempElement = document.querySelector(".temp");
  const weatherElement = document.querySelector(".weather");

  // Use a weather icon font or replace with an image URL
  iconElement.innerHTML = `<i class="fas fa-sun"></i>`;

  tempElement.textContent = `Temperature: ${data.main.temp}°C`;
  weatherElement.textContent = `Weather: ${data.weather[0].description}`;
}
// Add this function to your existing script.js file
document.addEventListener("DOMContentLoaded", function () {
  animateQuote();
});

function animateQuote() {
  const quoteElement = document.querySelector(".quote");

  // Delay the animation to make it more noticeable
  setTimeout(() => {
    quoteElement.classList.add("show");
  }, 500);
}
