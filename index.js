var http = require('http');


module.exports = myexpress;
function myexpress(){
	var app = function(req, res, next){
		res.statusCode = 404;
		res.end();
	};

	app.listen = function(port){
		var server = http.createServer(app);
		server.listen(port);
		return server;
	}

	return app;
};