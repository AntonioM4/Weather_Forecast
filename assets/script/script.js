var city = 'St. Louis'
var WeatherAPIkey = 'c8426401a16cc79bc8d7d5541a0f8741';
function getCity(){
    city = document.querySelector('.getCity').value;
    updateCity(city);
 }
 function updateCity(city){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + WeatherAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var searchCriteria = '';
        var weather = data;
        var status = weather.weather[0].main;
        console.log(data);
    
 })
}