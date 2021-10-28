const express = require('express');
const router = express.Router();
const db = require('../models/db.js');

router.get('/', (req, res) => {
    //console.log(req.query);
    const dbQuery = `SELECT entry, name FROM item_template WHERE name LIKE "%${req.query.itemName}%"`;
    db.query(dbQuery, (err, results) => {
        if (err) res.send(err);

        if (results.length > 0) {
            //console.log(results);
            const urls = [];
            for (item of results) {
                const url = `https://tbc.wowhead.com/item=${item.entry}/`;
                urls.push(url);
            }
            //console.log(urls);
            res.render('search-results', {urls:urls});
        } else {
            res.send('No item found.');
        }
    });
});

module.exports = router;
