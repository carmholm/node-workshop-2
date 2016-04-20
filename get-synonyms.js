var api = require('./lib/synonyms.js');
var request = require('request');
var prompt = require('prompt');
prompt.start();



var myApiKey = new api.SynonymAPI("c6b045453e29dc21f78ce9831c915c31");

prompt.get(['word'], function(err, result){
    var word = result.word;
    myApiKey.getSynonyms(word, function(result){
        var Table = require('cli-table');
        var table = new Table;
        table.push([result]);
        console.log(table.toString());
    });
});
