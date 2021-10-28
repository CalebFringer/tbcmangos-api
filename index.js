'use strict';

const config = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/');

const search = require('./routes/search.js')
app.use('/search', search);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html', err => {
		console.log(err);
	});
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});