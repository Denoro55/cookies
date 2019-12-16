// const express = require('express');
const http = require('http')
// const path = require('path');
// const app = express();
const Cookies = require('cookies');
const port = 3000;

// app.use('/', (req, res) => {

// 	const cookies = new Cookies(req, res);

// 	cookies.set('admin', true);
// 	console.log(cookies.get('admin'));

// 	console.log('Cookies from client: ' + req.headers['cookie']);

// 	// res.setHeader('Set-Cookie', 'express=4.0');

// 	// массив кук
// 	res.setHeader('Set-Cookie', ['value=item', 'value2=item2']);

// 	// res.status(200);

// 	// код ответа с куками
// 	// res.writeHead(200, { 'Set-Cookie': ['value=item', 'value2=item2'] } );

// 	res.sendFile(path.join(__dirname, 'index.html'));

// });

const keys = ['keyboard cat']

const server = http.createServer(function (req, res) {
  // Create a cookies object
  var cookies = new Cookies(req, res, { keys: keys })
 
  // Get a cookie
  var lastVisit = cookies.get('LastVisit', { signed: true })
 
  // Set the cookie to a value
  cookies.set('LastVisit', new Date().toISOString(), { signed: true })
 
  if (!lastVisit) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome, first time visitor!')
  } else {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome back! Nothing much changed since your last visit at ' + lastVisit + '.')
  }
})

server.listen(port, function () {
	console.log('Visit us at port ' + port + ' !');
})