Web Error
=========

Custom error object with code of http error

You can use this library as AMD, CommonJS or root library in your [Webpack](http://webpack.github.io/) or [RequireJS](http://requirejs.org/) module bundler.
Works in the browser, in [NodeJS](http://nodejs.org/), [Bower](http://bower.io/) and with [Browserify](http://browserify.org/).

# Example
	var WebError = require('web-error');

	var error = new WebError(404);

	(error instanceof Error).should.equal(true);
	(error instanceof WebError).should.equal(true);
