let express = require('express');
let	server = express();
// let data = require('./data.json');
    

server.get('/', function(req, res) {
	res.render('layouts/main')
})


module.exports = server