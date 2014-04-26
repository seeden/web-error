'use strict';

var util = require("util"),
	BaseError = require("base-error"),
    STATUS_CODES = require('./statuscodes');

function WebError (status, message) {
    this.status = status || 500;
    message = message || STATUS_CODES[this.status];

	BaseError.call(this, message);
}

util.inherits(WebError, BaseError);

WebError.STATUS_CODES = STATUS_CODES;


module.exports = WebError;