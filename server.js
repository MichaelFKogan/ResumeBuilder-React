var express = require('express');
var path = require('path');
var compression = require('compression');
var react = require('react');
var request = require('request');

// import { renderToString } from 'react-dom/server'
// import { match, RouterContext } from 'react-router'
// import routes from './modules/routes'
// import cors from 'cors'
// import request from 'request'

var app = express()

app.use(compression())
// app.use(cors());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

// send all requests to index.html so browserHistory works

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));

//   })

  // match({ routes, location: req.url }, (err, redirect, props) => {
  //   if (err) {
  //     res.status(500).send(err.message)
  //   } else if (redirect) {
  //     res.redirect(redirect.pathname + redirect.search)
  //   } else if (props) {
  //     // hey we made it!
  //     const appHtml = renderToString(<RouterContext {...props}/>)
  //     res.send(renderPage(appHtml))
  //   } else {
  //     res.status(404).send('Not Found')
  //   }
  // })
// })

app.get('/', function(req,res) {
request("http://api.indeed.com/ads/apisearch?publisher=4548195452860771&v=2&format=json&q=&l=NewYork,NY&sort=date&radius=25&start=0&limit=25&latlong=1&co=us&userip=1.2.3.4&useragent=GoogleChrome&v=2", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  res.json(body);
    })
});


// function renderPage(appHtml) {
//   return `
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>My First React Router App</title>
//     <link rel=stylesheet href=/index.css>
//     <div id=app>${appHtml}</div>
//     <script src="/bundle.js"></script>
//    `
// }

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
