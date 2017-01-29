// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var num = "0";
var queryURL = "";
var keyword = "";

var queryURLWithKeyword = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2";

var queryURLJustLocation = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to Indeed.
runQuery: function(location, keyword) {
    keyword = keyword;

if(keyword){
     queryURL = queryURLWithKeyword;
}

else{
     queryURL = queryURLJustLocation;
}
        return $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                if (response) {
                    console.log("RESPONSE.RESULTS: " + response.results);
                    return response;
                }
              return "";
        }); /* END AXIOS.GET */ 
    } /* END RUNQUERY */ 

    




}; /* END HELPER */ 


// We export the API helper
module.exports = helper;




