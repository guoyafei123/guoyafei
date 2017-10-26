var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    fs.readFile('gyf.txt', 'utf-8', function(err, data) {
        var user = data.split('&')[0];
        var pass = data.split('&')[1];
        fs.writeFile('gyf.txt', user + '&' + pass, function(err) {
            res.send(user + '&' + pass);
        })
    })
});

module.exports = router;