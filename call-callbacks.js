var fortune = require('./lib/fortune.js');

//Create a function called firstChar that takes a string and a callback, and “returns” the first character of the string after one second.
// Create a function called lastChar that takes a string and “returns” the last character of the string after one second.
//Create a function called getFirstAndLast that takes a string and “returns” the first+last character of the string.

function firstChar(str, callback) {
    var strFirstChar = str.charAt(0);
    setTimeout(function() {
        callback(strFirstChar);
    }, 1000);
}

function lastChar(str, callback) {
    var strLastChar = str.charAt(str.length - 1);
    setTimeout(function() {
        callback(strLastChar);
    }, 1000);
}

function getFirstAndLast(str, callback) {
    firstChar(str, function(str1){
        lastChar(str, function(str2){
            callback(str1 + str2);
        });
    });
}

// getFirstAndLast("hello", function(firstLast) {
//     console.log(firstLast);
//   });


var randomQuote = fortune.getFortune();

console.log(randomQuote);
