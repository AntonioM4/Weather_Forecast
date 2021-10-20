var btn = $(".btn");
var city = $(".form-control");
var cityName = $("#city-name");

function getCurrentWeather(event) {
    event.preventDefault();
    console.log(city.val());
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=c8426401a16cc79bc8d7d5541a0f8741&units=imperial";
    fetch(url).then(response =>{
        return response.json()
    }).then(data =>{
        console.log(data)
        console.log(data.main.temp);
        var temp = $("#temp");
        var wind = $("#wind");
        var humidity = $("#humidity")
        var uv = $("#uv")
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        temp.text("Temperature: " + data.main.temp);
        wind.text("Wind: " + data.wind.speed);
        humidity.text("Humidity: " + data.main.humidity);
        //uv.text("UV Index: " + data.)
        cityName.html(data.name + "<img src=" + icon + " />");    
    })
}

function getForecast(event){
    event.preventDefault();
    var urlForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city.val() + "&appid=c8426401a16cc79bc8d7d5541a0f8741&units=imperial";
    fetch(urlForecast).then(response =>{
        console.log(response);
        return response.json();
    }).then(data =>{
        console.log(data);
    })
}

btn.on("click", getCurrentWeather);
btn.on("click", getForecast);