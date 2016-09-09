import WebError from './WebError';

export default class NotAcceptable extends WebError {
  constructor(...args) {
    super(406, ...args);
  }
}

NotAcceptable.prototype.name = 'NotAcceptable';
