// call the packages we need
var express		= require('express');        // call express
var app			= express();                 // define our app using express
var mongoose	= require('mongoose');
var http		= require('http');
var bodyParser  = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

// ROUTES FOR OUR API
// =============================================================================

// get an instance of the express Router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
	// do logging
	console.log(req.url);
	// makes sure we go to the next route and we dont stop here
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	return res.redirect(301, 'http://mapmystreet.org');
});


// REGISTER OUR ROUTES
// =============================================================================
app.use('/', router);

// CONNECT DB
// =============================================================================
mongoose.connect('mongodb://root:peT8Ni8wOd2bal4Onk1@ds119598.mlab.com:19598/mapmystreet');

// START THE SERVER
// =============================================================================
var apiServer = http.createServer(app);
apiServer.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
