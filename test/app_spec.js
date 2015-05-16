var expect = require('chai').expect;
var request = require("supertest");
var myexpress = require("../index.js");
var http = require('http');

describe('Implement Empty App', function(){
	describe('as handler to http.createServer', function(){

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