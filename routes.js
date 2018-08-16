let express = require('express');
let	server = express();
let conspiracyData = require('./conspiracy.json');
//let nounData = require('./nouns.json');
//let verbData = require('./verbs.json');
let currentConspiracy = ""
let currentVerb = ""
let currentNoun = ""

server.get('/', function(req, res) {
	//reder conspiracy partial
	res.render('index')
})

server.post('/', function(req, res) {
	//read data
	console.log(req.body.name)


	noun = req.body;



	if (noun == ""){
	req.body.name = conspiracyData.nouns[0]

	noun = req.body
	}

//	noun = req.body;

	console.log(noun.name);


	//Here we can code what needs to go to the conspiracy page
	// -Code-
	console.log('Conspiracies: ', conspiracyData.conspiracy)
	console.log('nouns: ', conspiracyData.nouns[0])






	//reder conspiracy partial
	res.render('conspiracy', {noun})
})


module.exports = server