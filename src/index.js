import BaseError from 'base-error';
import StatusCode from './StatusCode';

export default class WebError extends BaseError {
  constructor(status = 500, message = StatusCode[status], errors = []) {
    super(message);

    this.status = status;
    this.errors = errors;
  }
}

WebError.prototype.name = 'WebError';

export { StatusCode };
