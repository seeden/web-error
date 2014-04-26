'use strict';

var util = require("util"),
	BaseError = require("base-error");

function WebError (message, code) {
	BaseError.call(this);
	this.code = code || 500;
}

util.inherits(WebError, BaseError);

module.exports = WebError;