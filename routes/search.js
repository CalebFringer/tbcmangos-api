const express = require('express');
const router = express.Router();
const db = require('../models/db.js');

router.get('/', (req, res) => {
    //console.log(req.query);
    const dbQuery = `SELECT entry, name FROM item_template WHERE name LIKE "%${req.query.itemName}%"`;
    db.query(dbQuery, (err, results) => {
        if (err) res.send(err);
        else {
            const urls = [];
            //console.log(results);
            for (item of results) {
                const url = `https://tbc.wowhead.com/item=${item.entry}/`;
                urls.push(url);
            }
            //console.log(urls);
            res.render('search-results', {urls:urls});
        }
    });
});

module.exports = router;
