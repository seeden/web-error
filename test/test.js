'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	WebError = require('./../index.js');

//The tests
describe('<Unit Test>', function() {
	describe('Create error:', function() {

		it('should be able to create instance of error ', function(done) {
			var error = new WebError(400);

			error.should.have.property('message');
			error.message.should.equal(WebError.STATUS_CODES['400']);

			error.should.have.property('status');
			error.status.should.equal(400);

			error.should.have.property('stack');

			error.should.have.property('className');
			error.className.should.equal('WebError');

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

			error.should.have.property('className');
			error.className.should.equal('WebError');

			(error instanceof Error).should.equal(true);
			(error instanceof WebError).should.equal(true);


			done();
		});
	}); 
});
