const express = require('express');
const router = express.Router();
const db = require('../models/db.js');

router.get('/', (req, res) => {
    console.log(req.query);
    const dbQuery = `SELECT entry, name FROM item_template WHERE name LIKE "%${req.query.itemName}%"`;
    db.query(dbQuery, (err, results) => {
        if (err) res.send(err);
        res.send(results);
    });
});

module.exports = router;
