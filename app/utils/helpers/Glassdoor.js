var axios = require("axios");

var num = "0";
var results = []; 

var helper = {

runQuery: function(term) {

var URL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ term +"&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"

return axios.get(URL).then(function(response) {

    if(err){throw err};
    console.log("RESPONSE: " + response);
    console.log("RESPONSE: " + response.data.results);

        return response.data.results[0];
        // console.log("response.data.results[0]" + response.data.results);

        results.push(response.data.results[0]);
        console.log(results);

        }); /* END AXIOS.GET */ 
    } /* END RUNQUERY */ 
}; /* END HELPER */ 

module.exports = helper;


helper.runQuery("New York")
// console.log(results);











