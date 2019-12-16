/*global __dirname */

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', (req, res) => {

	console.log('Cookies from client: ' + req.headers['cookie']);

	// res.setHeader('Set-Cookie', 'express=4.0');

	// массив кук
	res.setHeader('Set-Cookie', ['value=item', 'value2=item2']);

	// res.status(200);

	// код ответа с куками
	// res.writeHead(200, { 'Set-Cookie': ['value=item', 'value2=item2'] } );

	res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));