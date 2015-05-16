var expect = require('chai').expect;
var request = require("supertest");
var myexpress = require("../index.js");
var http = require('http');

describe('Implement Empty App', function(){
	describe('as handler to http.createServer', function(){
		it('create a server should return 404', function(done){
			var app = myexpress();
			app.listen(5001);

			request('http://localhost:5001')
					.get('/foo')
					.expect(404)
					.end(done());

		});

		it('should return an http.Server', function(done){
			var app = myexpress();
			var server = app.listen(4001);

			expect(server).to.be.instanceof(http.Server);
			done();
		});

		it('responds to /foo with 404', function(done){
			var app = myexpress();
			var server = http.createServer(app);
			request(server)
					.get('/foo')
					.expect(404)
					.end(done());
		});
	});
});