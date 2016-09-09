import WebError from './WebError';

export default class NotFound extends WebError {
  constructor(...args) {
    super(404, ...args);
  }
}

NotFound.prototype.name = 'NotFound';
