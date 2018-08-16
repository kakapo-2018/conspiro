let express = require('express');
let	server = express();
// let data = require('./data.json');
    

server.get('/', function(req, res) {
	res.send("Server Up")
})


module.exports = server