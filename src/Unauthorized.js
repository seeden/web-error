import WebError from './WebError';

export default class Unauthorized extends WebError {
  constructor(...args) {
    super(401, ...args);
  }
}

Unauthorized.prototype.name = 'Unauthorized';
