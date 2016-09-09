import should from 'should';
import WebError, { StatusCode, BadRequest } from '../src/index.js';

describe('Create error:', () => {
  it('should be able to create instance of error ', () => {
    const error = new WebError(400);

    error.should.have.property('message');
    error.message.should.equal(StatusCode[400]);

    error.should.have.property('status');
    error.status.should.equal(400);

    error.should.have.property('stack');

    error.should.have.property('name');
    error.name.should.equal('WebError');

    (error instanceof Error).should.equal(true);
    (error instanceof WebError).should.equal(true);
  });

  it('should be able to create instance of error with custom error', () => {
    const error = new WebError(400, 'Message of error');

    error.should.have.property('message');
    error.message.should.equal('Message of error');

    error.should.have.property('status');
    error.status.should.equal(400);

    error.should.have.property('stack');

    error.should.have.property('name');
    error.name.should.equal('WebError');

    (error instanceof Error).should.equal(true);
    (error instanceof WebError).should.equal(true);
  });

  it('should be able to create instance of BadRequest error with custom error', () => {
    const error = new BadRequest('Message of error');

    error.should.have.property('message');
    error.message.should.equal('Message of error');

    error.should.have.property('status');
    error.status.should.equal(400);

    error.should.have.property('stack');

    error.should.have.property('name');
    error.name.should.equal('BadRequest');

    (error instanceof Error).should.equal(true);
    (error instanceof WebError).should.equal(true);
    (error instanceof BadRequest).should.equal(true);
  });
});
