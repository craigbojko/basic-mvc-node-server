var express = require('express')
var ui = express.Router()

ui.use(function(req, res, next) {
	next()
});

ui.get('/', function(req, res, next) {
	require('../src/ui/app/controllers/home').index(req, res)
});

module.exports = function(){
	return ui
}
