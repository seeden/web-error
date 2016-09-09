import WebError from './WebError';

export default class MethodNotAllowed extends WebError {
  constructor(...args) {
    super(405, ...args);
  }
}

MethodNotAllowed.prototype.name = 'MethodNotAllowed';
