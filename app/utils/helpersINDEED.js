// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var num = "0";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to Indeed.
runQuery: function(location, keyword) {

if(keyword){
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}
else{
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}
        
        return axios.get(queryURL).then(function(response) {
                if (response.data.results) {
                    return response.data.results;
                }
              return "";
        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 

    runQueryOne: function(location, keyword) {
    num = "25";

if(keyword){
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}
else{
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}

        return axios.get(queryURL).then(function(response) {
                if (response.data.results) {
                    return response.data.results;
                }
              return "";
        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 

    runQueryTwo: function(location, keyword) {
    num = "50";

if(keyword){
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}
else{
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}

        return axios.get(queryURL).then(function(response) {
                if (response.data.results) {
                    return response.data.results;
                }
              return "";
        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */

    runQueryThree: function(location, keyword) {
    num = "75";

if(keyword){
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}
else{
    var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
}

        return axios.get(queryURL).then(function(response) {
                if (response.data.results) {
                    return response.data.results;
                }
              return "";
        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 




}; /* END HELPER */ 


// We export the API helper
module.exports = helper;




