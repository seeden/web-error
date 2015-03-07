'use strict';

var should = require('should');
var WebError = require('../dist/index.js');

describe('Create error:', function() {
	it('should be able to create instance of error ', function(done) {
		var error = new WebError(400);

		error.should.have.property('message');
		error.message.should.equal(WebError.StatusCode[400]);

		error.should.have.property('status');
		error.status.should.equal(400);

		error.should.have.property('stack');

		error.should.have.property('name');
		error.name.should.equal('WebError');

		(error instanceof Error).should.equal(true);
		(error instanceof WebError).should.equal(true);

		done();
	});

	it('should be able to create instance of error with custom error', function(done) {
		var error = new WebError(400, 'Message of error');

		error.should.have.property('message');
		error.message.should.equal('Message of error');

		error.should.have.property('status');
		error.status.should.equal(400);

		error.should.have.property('stack');

		error.should.have.property('name');
		error.name.should.equal('WebError');

		(error instanceof Error).should.equal(true);
		(error instanceof WebError).should.equal(true);

		done();
	});
}); 
