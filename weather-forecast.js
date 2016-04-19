// Ask the user for their location
// Retrieve the weather for the user’s location
// Display the current weather as well as the next 5 days weather in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji

var request = require('request');
var emoji = require('node-emoji');
var prompt = require('prompt');
prompt.start();

prompt.get(['city'], function(err, result) {
    var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city.toLowerCase();

    request(address, function(err, result) {
        var locationResult = JSON.parse(result.body);
        var latitude = locationResult.results[0].geometry.location.lat.toFixed(2);
        var longitude = locationResult.results[0].geometry.location.lng.toFixed(2);
        
        var url = "https://api.forecast.io/forecast/7989dc23b7e68cfcefc1852a6e2b4cd5/";
        var newUrl = url + latitude + "," + longitude + "?units=si";
        
        request(newUrl, function(err, result){
            
            var weatherObject = {};
            
            var resultObject = JSON.parse(result.body);
            
            var currentTemp = resultObject.currently.temperature.toFixed(0) + ".";
            var currentWeatherSummary = resultObject.currently.summary;
            
            for(var i = 1; i <= 5; i++){
                weatherObject["Summary of day " + i] = {summary: resultObject.daily.data[i].summary, max: resultObject.daily.data[i].temperatureMax.toFixed(0), min: resultObject.daily.data[i].temperatureMin.toFixed(0)};
            }
            console.log("Today: " + currentWeatherSummary + " with a temperature of " + currentTemp);
             console.log(weatherObject);
           
        });
    });
});
            
            // console.log(emoji.get('umbrella'));
            // console.log(emoji.get('cloud'));
            // console.log(emoji.get('rain_cloud'));
            // console.log(emoji.get('barely_sunny'));
            // console.log(emoji.get('sun_behind_cloud'));
            // console.log(emoji.get('sun_small_cloud'));
            // console.log(emoji.get('fire'));