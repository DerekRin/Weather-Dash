var cityIsNamed = "Boston"

const handleClick = () => {
    console.log('test')
}


function city (cityName) { 
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=c1c982f2047f84e21fb72b51a10b5d1b"
    fetch(url).then(data => {
        return data.json()
    }).then(info => {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + info.coord.lat + "&lon=" + info.coord.lon + "&exclude=alerts,minutely&appid=c1c982f2047f84e21fb72b51a10b5d1b").then(data => {
            return data.json()
        }).then(data => {
            console.log(data.daily)
        })
        //this is where your code will be to see on the html/front-end
    })
    
};

city(cityIsNamed)

// Connect Search with a click event 
// create variable to store what they type in the input field
// Select certain varaibles, that includes icons
// Local storage