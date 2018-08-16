let express = require('express');
let	server = express();
let conspiracyData = require('./conspiracy.json');

// let currentConspiracy = ""
// let currentVerb = ""
// let currentNoun = ""

server.get('/', function(req, res) {
	//reder conspiracy partial
	res.render('index')
})


server.post('/', function(req, res) {
	//Read data
	console.log(req.body.noun)

	//Move request body into noun
	let noun = req.body;
	noun.conspiracy = conspiracyData.conspiracy[1]

	//If user doesn't input a noun use one from our JSON
	if (noun.noun === ""){
	req.body.noun = conspiracyData.nouns[0]
	noun = req.body
	}

	//Log out data
	console.log(noun.noun);
	console.log('Conspiracies: ', conspiracyData.conspiracy)
	console.log('nouns: ', conspiracyData.nouns[0])

	//reder conspiracy partial
	res.render('conspiracy', noun)
})


module.exports = server