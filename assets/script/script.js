var city = ''
var tempEl = $('#temp')
var windEl = $('#wind')
var humidityEl = $('#humidity')
var uvEl =$('#uv')
var WeatherAPIkey = 'c8426401a16cc79bc8d7d5541a0f8741';
function getCity() {
    city = document.querySelector('.getCity').value;
    updateCity(city);
}
function updateCity(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + WeatherAPIkey + '&units=imperial', {
        cache: 'reload',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var searchCriteria = '';
            var weather = data;
            var tempature = data.textContent
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var temp = data.main.temp;
            var wind = data.wind.speed;
            var humidity = data.main.humidity
            tempEl.append(temp + ' °F')
            windEl.append(wind + ' mph')
            humidityEl.append(humidity + '%')
            latLon()
            console.log(data)


            function latLon() {
                fetch('https:api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + WeatherAPIkey, {
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var uv = data.current.uvi
                        uvEl.append(uv)
                        console.log(data)
                    })
        }
    })
}
