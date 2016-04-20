// create and export a constructor function called SynonymAPI. It takes an api key as parameter and sets it on the new object

var request = require('request');

function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype = {
    
        getSynonyms: function(word, callback) {
            var urlBigHugeThesaurus = "http://words.bighugelabs.com/api/2/";
            var address = urlBigHugeThesaurus + this.apiKey + "/" + word+ "/";
            
            request(address, function(err, result) {
                callback(result.body);
            });
        }
}

module.exports = {
    SynonymAPI: SynonymAPI
};

