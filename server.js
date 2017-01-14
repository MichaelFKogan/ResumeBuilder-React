import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'

import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'
import cors from 'cors'
import request from 'request'

var app = express()

app.use(compression())
app.use(cors());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})




// PRACTICE SERVER REQUEST TO INDEED API - DELETE IF NOT WORKING
// =====================================================

var num = "0";
var location = "New York";
var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l="+ location +"&sort=date&radius=25&start="+num+"&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2";
app.get('/', function(req, res) {


// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
request(queryURL, function(error, response, body) {
        // console.log(body);
        

res.send(response); 
  })
});

// PRACTICE SERVER REQUEST TO INDEED API - DELETE IF NOT WORKING
// =====================================================



function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
