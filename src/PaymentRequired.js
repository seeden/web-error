import WebError from './WebError';

export default class PaymentRequired extends WebError {
  constructor(...args) {
    super(402, ...args);
  }
}

PaymentRequired.prototype.name = 'PaymentRequired';
