import WebError from './WebError';

export default class BadRequest extends WebError {
  constructor(...args) {
    super(400, ...args);
  }
}

BadRequest.prototype.name = 'BadRequest';
