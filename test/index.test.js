var request = require('supertest')
var app = require('../index.js')
describe('GET /', function(){
	it('repond with hello world', function(done){
		request(app).get('/').expect('hello world',done)
	})
})
