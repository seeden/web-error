import WebError from './WebError';

export default class Forbidden extends WebError {
  constructor(...args) {
    super(403, ...args);
  }
}

Forbidden.prototype.name = 'Forbidden';
