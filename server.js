var express = require('express');
var path = require('path');
var compression = require('compression');
var react = require('react');

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
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));

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
})



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
