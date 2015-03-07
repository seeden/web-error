import BaseError from 'base-error';
import StatusCode from './statuscode';

export default class WebError extends BaseError {
	constructor (status, message, errors) {
		status = status || 500;
		errors = errors || [];

		message = message || StatusCode[status];
		console.log(message);

		super(message);

		this.status = status;
		this.errors = errors;
	}
}

WebError.prototype.name = 'WebError';
WebError.StatusCode = StatusCode;