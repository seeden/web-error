import should from 'should';
import WebError, { StatusCode } from '../src/index.js';

describe('Create error:', function() {
  it('should be able to create instance of error ', function(done) {
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

    done();
  });

  it('should be able to create instance of error with custom error', function(done) {
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

    done();
  });
});
