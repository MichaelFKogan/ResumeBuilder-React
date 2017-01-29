// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var num = "1";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to Indeed.
runQuery: function(location, keyword) {

if(keyword && location){
  console.log("if keyword && location: "+keyword +" "+location);
   var queryURL = "https://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+keyword+"&city="+location+"&country=US&age=21&page="+num+"&pgcnt=50" 
}

else if(keyword){
  console.log("else if keyword: "+keyword);
   var queryURL = "https://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+keyword+"&city=NewYork,NY&country=US&age=21&page="+num+"&pgcnt=50" 
}

else if(location){
  console.log("else if location: "+location);
   var queryURL = "https://service.dice.com/api/rest/jobsearch/v1/simple.json?&city="+location+"&country=US&age=21&page="+num+"&pgcnt=50" 
}

else{
  console.log("else: no location or keyword");
   var queryURL = "https://service.dice.com/api/rest/jobsearch/v1/simple.json?&city=New+York,+NY&country=US&age=21&page="+num+"&pgcnt=50" 
}
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                    return response.data.resultItemList;
                }
              return "";
        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 

//     runQueryOne: function(location, keyword) {
//     num = "2";

// if(keyword){
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }
// else{
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

//         return axios.get(queryURL).then(function(response) {
//                 if (response.data.results) {
//                     return response.data.results;
//                 }
//               return "";
        // }); /* END AXIOS.GET */ 
    // }, /* END RUNQUERY */ 

//     runQueryTwo: function(location, keyword) {
//     num = "3";

// if(keyword){
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }
// else{
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

//         return axios.get(queryURL).then(function(response) {
//                 if (response.data.results) {
//                     return response.data.results;
//                 }
//               return "";
        // }); /* END AXIOS.GET */ 
    // }, /* END RUNQUERY */

//     runQueryThree: function(location, keyword) {
//     num = "4";

// if(keyword){
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }
// else{
//     var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

//         return axios.get(queryURL).then(function(response) {
//                 if (response.data.results) {
//                     return response.data.results;
//                 }
//               return "";
        // }); /* END AXIOS.GET */ 
    // }, /* END RUNQUERY */ 




}; /* END HELPER */ 


// We export the API helper
module.exports = helper;



// "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+keyword+"&city="+location+"&country=US&age=21&page="+num+"&pgcnt=50" 

// second page of results, search for java jobs in United States no more than 21 days old"

// direct - (optional) if the value of this parameter is "1" then jobs returned will be direct hire
// areacode - (optional) specify the jobs area code
// country - (optional) specify the jobs ISO 3166 country code
// state - (optional) specify the jobs United States Post Office state code
// skill - (optional) specify search text for the jobs skill property
// city - (optional) specify the jobs United States Post Office ZipCode as the center of 40 mile radius

// text - (optional) specify search text for the jobs entire body
// ip - (optional) specify an IP address that will be used to look up a geocode which will be used in the search
// age - (optional) specify a posting age (a.k.a. days back)
// diceid - (optional) specify a Dice customer ID to find only jobs from that company
// page - (optional) specify a page number of the results to be displayed (1 based)
// pgcnt - (optional) specify the number of results per page

// sort - (optional) specify a sort paremeter; sort=1 sorts by posted age, sort=2 sorts by job title, sort=3 sorts by company, sort=4 sorts by location

// sd - (optional) sort direction; sd=a sort order is ASCENDING sd=d sort order is DESCENDING























