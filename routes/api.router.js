var express = require('express')
var expressAPI = express.Router()
var api = require('../src/api/app')()

expressAPI.use(function(req, res, next) {
	next()
});

expressAPI.get('/', function(req, res, next) {
	var resp = api.processHome()
	res.json(resp);
});

module.exports = function(){
	return expressAPI
}
