var path = require('path')
var routes = require('./routes')
var express = require('express')
var hbs = require('express-handlebars') 
var server = express()

// view engine config

var hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}

server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

// middleware

server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', routes)

module.exports = server
