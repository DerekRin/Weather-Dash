var cityContent = document.querySelector(".citydata");
var citySave = [];

const handleClick = () => {
  var input = document.querySelector(".input");
  var cityIsNamed = input.value;
  console.log(input);
  console.log(cityIsNamed);
  city(cityIsNamed);
  citySave.push(cityIsNamed);
  localStorage.setItem("cityWeather", citySave);
};

function getCityData() {
  var getArrayData = localStorage.getItem("cityWeather");
  console.log(getArrayData);
}
getCityData();

function city(cityName) {
  cityContent.innerHTML = "";
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=c1c982f2047f84e21fb72b51a10b5d1b";
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((info) => {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          info.coord.lat +
          "&lon=" +
          info.coord.lon +
          "&exclude=alerts,minutely&appid=c1c982f2047f84e21fb72b51a10b5d1b"
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          //Day
          let unix_timestamp = data.daily[0].dt;
          var date = new Date(unix_timestamp * 1000);
          var webDate = document.createElement("h3");
          webDate.innerHTML = date;
          cityContent.appendChild(webDate);

          //Temperature
          let kelvinToF = data.daily[0].temp.day;
          var temperature = kelvinToF - 273.15 * 1.8 + 32;
          var webTemp = document.createElement("h3");
          webTemp.innerHTML = temperature;
          cityContent.appendChild(webTemp);

          //Wind Speed
          let knotsToMph = data.daily[0].wind_speed;
          var windSpeed = knotsToMph * 1.15077945;
          var webSpeed = document.createElement("h3");
          webSpeed.innerHTML = windSpeed;
          cityContent.appendChild(webSpeed);

          //Humidity
          let humidityToDew = data.daily[0].humidity;
          var dewCount = humidityToDew - 100 / 5;
          var webHum = document.createElement("h3");
          webHum.innerHTML = dewCount;
          cityContent.appendChild(webHum);

          //uv index
          let unI = data.daily[0].uvi;
          var webIn = document.createElement("h3");
          webIn.innerHTML = unI;
          cityContent.appendChild(webIn);
          if (unI < 3) {
            webIn.style.backgroundColor = "LightGreen";
          } else if ((unI = 4)) {
            webIn.style.backgroundColor = "LightYellow";
          } else unI > 5;
          {
            webIn.style.backgroundColor = "OrangeRed";
          }
        });
      //this is where your code will be to see on the html/front-end
    });
}

// Select certain varaibles, that includes icons
