Web Error
=========

Custom error object with code of http error

# Example
	var WebError = require('web-error');

	var error = new WebError(404);

	(error instanceof Error).should.equal(true);
	(error instanceof WebError).should.equal(true);
