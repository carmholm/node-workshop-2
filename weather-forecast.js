// Ask the user for their location
// Retrieve the weather for the user’s location
// Display the current weather as well as the next 5 days weather in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji

var request = require('request');

var prompt = require('prompt');
prompt.start();

prompt.get(['city'], function(err, result) {
    var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city.toLowerCase();

    request(address, function(err, result) {
        var locationResult = JSON.parse(result.body);
        var latitude = locationResult.results[0].geometry.location.lat.toFixed(2);
        var longitude = locationResult.results[0].geometry.location.lng.toFixed(2);
        
        var url = "https://api.forecast.io/forecast/7989dc23b7e68cfcefc1852a6e2b4cd5/";
        var newUrl = url + latitude + "," + longitude;
        
        request(newUrl, function(err, result){
            var resultObject = JSON.parse(result.body);
            var currentTemp = resultObject.currently.temperature;
            var dayOneSummary = resultObject.daily.data[1].summary;
            var dayOneTempHigh = resultObject.daily.data[1].temperatureMax;
            var dayOneTempLow = resultObject.daily.data[1].temperatureMin;
            var dayTwoSummary = resultObject.daily.data[2].summary;
            var dayTwoTempHigh = resultObject.daily.data[2].temperatureMax;
            var dayTwoTempLow = resultObject.daily.data[2].temperatureMin;
            var dayThreeSummary = resultObject.daily.data[3].summary;
            var dayThreeTempHigh = resultObject.daily.data[3].temperatureMax;
            var dayThreeTempLow = resultObject.daily.data[3].temperatureMin;
            var dayFourSummary = resultObject.daily.data[4].summary;
            var dayFourTempHigh = resultObject.daily.data[4].temperatureMax;
            var dayFourTempLow = resultObject.daily.data[4].temperatureMin;
            var dayFiveSummary = resultObject.daily.data[5].summary;
            var dayFiveTempHigh = resultObject.daily.data[5].temperatureMax;
            var dayFiveTempLow = resultObject.daily.data[5].temperatureMin;
            console.log("The current temperature is " + currentTemp + "F");
            console.log("The forecast for the next five days:");
            console.log(dayOneSummary + " High: " + dayOneTempHigh + "F" + " Low: " + dayOneTempLow + "F");
            console.log(dayTwoSummary + " High: " + dayTwoTempHigh + "F" + " Low: " + dayTwoTempLow + "F");
            console.log(dayThreeSummary + " High: " + dayThreeTempHigh + "F" + " Low: " + dayThreeTempLow + "F");
            console.log(dayFourSummary + " High: " + dayFourTempHigh + "F" + " Low: " + dayFourTempLow + "F");
            console.log(dayFiveSummary + " High: " + dayFiveTempHigh + "F" + " Low: " + dayFiveTempLow + "F");
        });
    });
});


