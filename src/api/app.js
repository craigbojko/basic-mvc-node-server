/**
	
*/
var orm = require('orm')
var fs = require('fs')
var apiFuncs = require('./controllers/apiFuncs')()
var config = require('../../config/config')

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

orm.db = orm.connect(config.db, function(err, db){
  if(err){
    console.log("Something is wrong with the connection", err);
    return ;
  }
});

// Reads models into orm.db config for use in UI
var modelsPath = __dirname + '/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

module.exports = function () {
	return apiFuncs
}
