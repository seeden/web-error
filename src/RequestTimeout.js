import WebError from './WebError';

export default class RequestTimeout extends WebError {
  constructor(...args) {
    super(408, ...args);
  }
}

RequestTimeout.prototype.name = 'RequestTimeout';
