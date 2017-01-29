// Include the axios package for performing HTTP requests (promise based alternative to request)

// Helper functions for making API Calls
var helper = {


runQuery: function(location, keyword) {

   

     } /* END RUNQUERY */ 

}; /* END HELPER */ 



  // This function serves our purpose of running the query to Indeed.
// runQuery: function(location, keyword) {

// if(keyword && location){
//     console.log("1");
//     var queryURL = "http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l="+ location +"&sort=date&radius=25&start=0&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

// else if(keyword){
//     console.log("2");
//     var queryURL = "http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q="+ keyword +"&l=NewYork,NY&sort=date&radius=25&start=0&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

// else if (location){
//     console.log("3");
//     var queryURL = "http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start=0&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

// else {
//     console.log("4");
//     var queryURL = "http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l=NewYork,NY&sort=date&radius=25&start=0&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2"
// }

//         return axios.get(queryURL).then(function(response) {
//                 if (response) {
//                     console.log(response);
//                     return response.data.results;
//                 }
//               return "";
      /*  }); /* END AXIOS.GET */ 
/*    } /* END RUNQUERY */ 


/* }; /* END HELPER */ 


// We export the API helper
module.exports = helper;




