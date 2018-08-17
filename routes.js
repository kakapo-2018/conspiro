let express = require('express');
let	server = express();
let conspiracyData = require('./conspiracy.json');

server.get('/', function(req, res) {
	//Render index partial (Homepage)
	res.render('index')
})

server.post('/', function(req, res) {
	//Pull random noun from our list
	let randomNoun = Math.floor((Math.random() * (conspiracyData.nouns.length - 1)));
	let randomStringsForNouns = Math.floor((Math.random() * (conspiracyData.stringsForNouns.length - 1)));
	let randomIntro = Math.floor((Math.random() * (conspiracyData.intro.length - 1)));
	let randomStringsForObjects = Math.floor((Math.random() * (conspiracyData.stringsForObjects.length - 1)));
	let randomGrammaticalObjects = Math.floor((Math.random() * (conspiracyData.grammaticalObjects.length - 1)));

	//Log body
	console.log(req.body)

	//Move request body into noun
	let conspiracyPOST = req.body;

	//Set out conspiracy using the random from above
	conspiracyPOST.conspiracy = conspiracyData.stringsForNouns[randomStringsForNouns]
	conspiracyPOST.intro = conspiracyData.intro[randomIntro]


	//If user doesn't input a noun use one from our JSON
	if (conspiracyPOST.noun === ""){
		if(Math.random() >= 0.5){
			req.body.noun = conspiracyData.nouns[randomNoun]
			conspiracyPOST = req.body
		}
		else{
			conspiracyPOST.conspiracy = conspiracyData.stringsForObjects[randomStringsForObjects]
			conspiracyPOST.object = conspiracyData.grammaticalObjects[randomGrammaticalObjects]
		}
	}



	//Log out data
  console.log('Chosen noun: ', "\n" , randomNoun)
	console.log('nouns: ', "\n" , conspiracyData.nouns, "\n")

	console.log('Chosen conspiracy: ', "\n" , randomStringsForNouns)
	console.log('Conspiracies: ', "\n" , conspiracyData.stringsForNouns)

	console.log('Chosen Intro: ', "\n" , randomStringsForNouns)
	console.log('Intros: ', "\n" , conspiracyData.intro)

	console.log('Chosen StringsForObjects: ', "\n" , randomStringsForObjects)
	console.log('StringsForObjects: ', "\n" , conspiracyData.stringsForObjects)

	console.log('Chosen GrammaticalObjects: ', "\n" , randomGrammaticalObjects)
	console.log('GrammaticalObjects: ', "\n" , conspiracyData.grammaticalObjects)

	//reder conspiracy partial (conspiracy page)
	res.render('conspiracy', conspiracyPOST)
})


module.exports = server