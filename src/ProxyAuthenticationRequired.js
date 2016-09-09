import WebError from './WebError';

export default class ProxyAuthenticationRequired extends WebError {
  constructor(...args) {
    super(407, ...args);
  }
}

ProxyAuthenticationRequired.prototype.name = 'ProxyAuthenticationRequired';
