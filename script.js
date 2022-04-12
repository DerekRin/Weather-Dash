var cityContent = document.querySelector(".citydata");
var cityContentS = document.querySelector(".citydatas");
var cityContentT = document.querySelector(".citydatat");
var cityContentF = document.querySelector(".citydataf");
var cityContentFi = document.querySelector(".citydatafi");
var cityContentSi = document.querySelector(".citydatasi");
var citySave = [];

const handleClick = () => {
  var input = document.querySelector(".input");
  var cityIsNamed = input.value;
  city(cityIsNamed);
  citySave.push(cityIsNamed);
  localStorage.setItem("cityWeather", citySave);
};

function getCityData() {
  var getArrayData = localStorage.getItem("cityWeather");
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
          webDate.innerHTML = date.toDateString();
          cityContent.appendChild(webDate);

          //Temperature
          let kelvinToF = data.daily[0].temp.day;
          var temperature = (kelvinToF - 273.15) * 1.8 + 32;
          var webTemp = document.createElement("h3");
          webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
          cityContent.appendChild(webTemp);

          //Wind Speed
          let knotsToMph = data.daily[0].wind_speed;
          var windSpeed = knotsToMph * 1.15077945;
          var webSpeed = document.createElement("h3");
          webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
          cityContent.appendChild(webSpeed);

          //Humidity
          let humidityToDew = data.daily[0].humidity;
          var dewCount = humidityToDew - 100 / 5;
          var webHum = document.createElement("h3");
          webHum.innerHTML = `Humidity: ${dewCount} %`;
          cityContent.appendChild(webHum);

          //uv index
          let unI = data.daily[0].uvi;
          var webIn = document.createElement("h3");
          webIn.innerHTML = `UV Index: ${unI}`;
          cityContent.appendChild(webIn);
          if (unI < 3) {
            webIn.style.backgroundColor = "LightGreen";
          } else if (unI <= 5) {
            webIn.style.backgroundColor = "LightYellow";
          } else {
            webIn.style.backgroundColor = "OrangeRed";
          }
        });
      //Day 2
      cityContentS.innerHTML = "";
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
              let unix_timestamp = data.daily[1].dt;
              var date = new Date(unix_timestamp * 1000);
              var webDate = document.createElement("h3");
              webDate.innerHTML = date.toDateString();
              cityContentS.appendChild(webDate);

              //Temperature
              let kelvinToF = data.daily[1].temp.day;
              var temperature = (kelvinToF - 273.15) * 1.8 + 32;
              var webTemp = document.createElement("h3");
              webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
              cityContentS.appendChild(webTemp);

              //Wind Speed
              let knotsToMph = data.daily[1].wind_speed;
              var windSpeed = knotsToMph * 1.15077945;
              var webSpeed = document.createElement("h3");
              webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
              cityContentS.appendChild(webSpeed);

              //Humidity
              let humidityToDew = data.daily[1].humidity;
              var dewCount = humidityToDew - 100 / 5;
              var webHum = document.createElement("h3");
              webHum.innerHTML = `Humidity: ${dewCount} %`;
              cityContentS.appendChild(webHum);

              //uv index
              let unI = data.daily[1].uvi;
              var webIn = document.createElement("h3");
              webIn.innerHTML = `UV Index: ${unI}`;
              cityContentS.appendChild(webIn);
              if (unI < 3) {
                webIn.style.backgroundColor = "LightGreen";
              } else if (unI <= 5) {
                webIn.style.backgroundColor = "LightYellow";
              } else {
                webIn.style.backgroundColor = "OrangeRed";
              }
            });
        });
      //Day 3
      cityContentT.innerHTML = "";
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
              //Day 3
              let unix_timestamp = data.daily[2].dt;
              var date = new Date(unix_timestamp * 1000);
              var webDate = document.createElement("h3");
              webDate.innerHTML = date.toDateString();
              cityContentT.appendChild(webDate);

              //Temperature
              let kelvinToF = data.daily[2].temp.day;
              var temperature = (kelvinToF - 273.15) * 1.8 + 32;
              var webTemp = document.createElement("h3");
              webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
              cityContentT.appendChild(webTemp);

              //Wind Speed
              let knotsToMph = data.daily[2].wind_speed;
              var windSpeed = knotsToMph * 1.15077945;
              var webSpeed = document.createElement("h3");
              webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
              cityContentT.appendChild(webSpeed);

              //Humidity
              let humidityToDew = data.daily[2].humidity;
              var dewCount = humidityToDew - 100 / 5;
              var webHum = document.createElement("h3");
              webHum.innerHTML = `Humidity: ${dewCount} %`;
              cityContentT.appendChild(webHum);

              //uv index
              let unI = data.daily[2].uvi;
              var webIn = document.createElement("h3");
              webIn.innerHTML = `UV Index: ${unI}`;
              cityContentT.appendChild(webIn);
              if (unI < 3) {
                webIn.style.backgroundColor = "LightGreen";
              } else if (unI <= 5) {
                webIn.style.backgroundColor = "LightYellow";
              } else {
                webIn.style.backgroundColor = "OrangeRed";
              }
            });
        });
      //Day 4
      cityContentF.innerHTML = "";
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
              let unix_timestamp = data.daily[3].dt;
              var date = new Date(unix_timestamp * 1000);
              var webDate = document.createElement("h3");
              webDate.innerHTML = date.toDateString();
              cityContentF.appendChild(webDate);

              //Temperature
              let kelvinToF = data.daily[3].temp.day;
              var temperature = (kelvinToF - 273.15) * 1.8 + 32;
              var webTemp = document.createElement("h3");
              webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
              cityContentF.appendChild(webTemp);

              //Wind Speed
              let knotsToMph = data.daily[3].wind_speed;
              var windSpeed = knotsToMph * 1.15077945;
              var webSpeed = document.createElement("h3");
              webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
              cityContentF.appendChild(webSpeed);

              //Humidity
              let humidityToDew = data.daily[3].humidity;
              var dewCount = humidityToDew - 100 / 5;
              var webHum = document.createElement("h3");
              webHum.innerHTML = `Humidity: ${dewCount} %`;
              cityContentF.appendChild(webHum);

              //uv index
              let unI = data.daily[3].uvi;
              var webIn = document.createElement("h3");
              webIn.innerHTML = `UV Index: ${unI}`;
              cityContentF.appendChild(webIn);
              if (unI < 3) {
                webIn.style.backgroundColor = "LightGreen";
              } else if (unI <= 5) {
                webIn.style.backgroundColor = "LightYellow";
              } else {
                webIn.style.backgroundColor = "OrangeRed";
              }
            });
        });
      //Day 5
      cityContentFi.innerHTML = "";
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
              let unix_timestamp = data.daily[4].dt;
              var date = new Date(unix_timestamp * 1000);
              var webDate = document.createElement("h3");
              webDate.innerHTML = date.toDateString();
              cityContentFi.appendChild(webDate);

              //Temperature
              let kelvinToF = data.daily[4].temp.day;
              var temperature = (kelvinToF - 273.15) * 1.8 + 32;
              var webTemp = document.createElement("h3");
              webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
              cityContentFi.appendChild(webTemp);

              //Wind Speed
              let knotsToMph = data.daily[4].wind_speed;
              var windSpeed = knotsToMph * 1.15077945;
              var webSpeed = document.createElement("h3");
              webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
              cityContentFi.appendChild(webSpeed);

              //Humidity
              let humidityToDew = data.daily[4].humidity;
              var dewCount = humidityToDew - 100 / 5;
              var webHum = document.createElement("h3");
              webHum.innerHTML = `Humidity: ${dewCount} %`;
              cityContentFi.appendChild(webHum);

              //uv index
              let unI = data.daily[4].uvi;
              var webIn = document.createElement("h3");
              webIn.innerHTML = `UV Index: ${unI}`;
              cityContentFi.appendChild(webIn);
              if (unI < 3) {
                webIn.style.backgroundColor = "LightGreen";
              } else if (unI <= 5) {
                webIn.style.backgroundColor = "LightYellow";
              } else {
                webIn.style.backgroundColor = "OrangeRed";
              }
            });
        });
      //Day
      cityContentSi.innerHTML = "";
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
              let unix_timestamp = data.daily[5].dt;
              var date = new Date(unix_timestamp * 1000);
              var webDate = document.createElement("h3");
              webDate.innerHTML = date.toDateString();
              cityContentSi.appendChild(webDate);

              //Temperature
              let kelvinToF = data.daily[5].temp.day;
              var temperature = (kelvinToF - 273.15) * 1.8 + 32;
              var webTemp = document.createElement("h3");
              webTemp.innerHTML = `Temperature: ${temperature.toFixed(2)} °F`;
              cityContentSi.appendChild(webTemp);

              //Wind Speed
              let knotsToMph = data.daily[5].wind_speed;
              var windSpeed = knotsToMph * 1.15077945;
              var webSpeed = document.createElement("h3");
              webSpeed.innerHTML = `Wind: ${windSpeed.toFixed(2)} MPH`;
              cityContentSi.appendChild(webSpeed);

              //Humidity
              let humidityToDew = data.daily[5].humidity;
              var dewCount = humidityToDew - 100 / 5;
              var webHum = document.createElement("h3");
              webHum.innerHTML = `Humidity: ${dewCount} %`;
              cityContentSi.appendChild(webHum);

              //uv index
              let unI = data.daily[5].uvi;
              var webIn = document.createElement("h3");
              webIn.innerHTML = `UV Index: ${unI}`;
              cityContentSi.appendChild(webIn);
              if (unI < 3) {
                webIn.style.backgroundColor = "LightGreen";
              } else if (unI <= 5) {
                webIn.style.backgroundColor = "LightYellow";
              } else {
                webIn.style.backgroundColor = "OrangeRed";
              }
            });
        });
    });
}
