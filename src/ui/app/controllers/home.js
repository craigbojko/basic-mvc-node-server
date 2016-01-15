// var db = require('orm').db
// var Article = db.models.article;

var base = '../../../'
var api = require(base + 'api/app')()

function homepage (req, res) {
	// Article.find({id: 1}, function(err, articles){
    // if(err) throw new Error(err);
    
    var resp = api.processHome()

    res.render('home/index', {
      title: 'Generator-Express MVC',
      resp: JSON.stringify(resp)
    });
  // });
}

module.exports.index = homepage
