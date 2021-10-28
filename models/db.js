const mysql = require('mysql');

console.log('Loading db.js...')

let connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: 'tbcmangos'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to tbcmangos.');
});

module.exports = connection;