var express = require('express')
var compress = require('compression')
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config/config')

var app = express();
var apiRouter = require('./routes/api.router')()
var uiRouter = require('./routes/ui.router')()

app.use(express.static(config.root + '/ui/public'));

app.set('port', config.port);
app.set('views', config.root + '/src/ui/app/views');
app.set('view engine', 'jade');

// app.use(express.logger('dev'));

app.use(compress());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.methodOverride());

app.use('/', uiRouter)
app.use('/api', apiRouter)

app.use(function(req, res) {
  res.status(404).render('404', { title: '404' })
});

app.listen(config.port);
