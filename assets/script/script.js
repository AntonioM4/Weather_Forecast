var cityNameEl = $('#cityName')
var tempEl = $('#temp')
var windEl = $('#wind')
var humidityEl = $('#humidity')
var uvEl = $('#uv')

var WeatherAPIkey = 'c8426401a16cc79bc8d7d5541a0f8741';






if (localStorage.getItem('cityName') === null) {
    cityNameEl = [];
} else {
    cityNameEl = JSON.parse(localStorage.getItem('cityName'));
}
function getCity() {
    city = document.querySelector('.getCity').value;
    updateCity(city);
    cityList(city);
}

function cityList(name) {
    var list = document.querySelector('.button-list');
    var button = document.createElement('button');
    button.innerHTML = name;
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.addEventListener('click', function () {
        updateCity(name);
    });
    cityNameEl.push(name);
    localStorage.setItem('cityName', JSON.stringify(cityNameEl));
    list.appendChild(button);
}


// getting the window 
function updateCity(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + WeatherAPIkey + '&units=imperial', {
        cache: 'reload',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityName = data.name
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(data)
            latLon();




            function latLon() {
                fetch('https:api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + WeatherAPIkey + '&units=imperial', {
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var temp = data.current.temp;
                        var humidity = data.current.humidity;
                        var uv = data.current.uvi;
                        var wind = data.current.wind_speed;
                        document.getElementById('cityName').innerHTML = (cityName);
                        document.getElementById('temp').innerHTML = ('Temperature: ' + temp + ' °F');
                        document.getElementById('wind').innerHTML = ('Wind Speed: ' + wind + ' mph');
                        document.getElementById('humidity').innerHTML = ('Humidity: ' + humidity + '%');
                        document.getElementById('uv').innerHTML = ('UVI: ' + uv);
                        console.log(data)
                    })
            }



        })
}