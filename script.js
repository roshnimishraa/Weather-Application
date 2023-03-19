const API_KEY = `9cf9e96fc70d45eabeb61c797a907ee2`;
// const API =

// `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// `

// const IMG_URL =
// `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> `

const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const form = document.querySelector("form");

const getWeather = async (city) => {
  weather.innerHTML = `<img src="Loading.gif" alt="loading spinner">`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // &units=metric to convert temp in Celcius
  const response = await fetch(url);
  //   console.log(response);
  // json data
  const data = await response.json();
  // console.log(data)
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>City Not Found!</h2>`;
    return;
  }
  weather.innerHTML = `
    <div>
    <img src = " https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">     
        </div>
        <div>
          <h2 class="heading">${data.main.temp} °C</h2>
          <h4 class="heading">${data.weather[0].main}</h4>
        </div>
    `;
};
form.addEventListener("submit", function (event) {
  // form default nature is on submit start reloading
  // preventDefault is used to stop the loading
  //   console.log(search.value);
  getWeather(search.value);
  event.preventDefault();
});
