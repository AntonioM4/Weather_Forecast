var city = ''
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
            console.log(data);
            console.log(lat);
            console.log(lon);
            console.log(temp);
        })
}