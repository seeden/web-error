Web Error
=========

Custom error object with code of http error

## Example

```js
import WebError from 'web-error';

// CommonJS
var WebError = require('web-error').default;

const error = new WebError(404, 'My message');

error.status.should.equal(400);
(error instanceof Error).should.equal(true);
(error instanceof WebError).should.equal(true);
```

## BadRequest

```js
import { BadRequest } from 'web-error';

// CommonJS
var WebError = require('web-error').default;

const error = new BadRequest('My message');

error.status.should.equal(400);
(error instanceof Error).should.equal(true);
(error instanceof WebError).should.equal(true);
(error instanceof BadRequest).should.equal(true);
```

## Unauthorized

```js
import { Unauthorized } from 'web-error';

// CommonJS
var WebError = require('web-error').default;

const error = new BadRequest('My message');

error.status.should.equal(401);
(error instanceof Error).should.equal(true);
(error instanceof WebError).should.equal(true);
(error instanceof Unauthorized).should.equal(true);
```

## List of all classes

|Status Code|Constructor Name             |
|-----------|-----------------------------|
|400        |BadRequest                   |
|401        |Unauthorized                 |
|402        |PaymentRequired              |
|403        |Forbidden                    |
|404        |NotFound                     |
|405        |MethodNotAllowed             |
|406        |NotAcceptable                |
|407        |ProxyAuthenticationRequired  |
|408        |RequestTimeout               |
|409        |Conflict                     |
|410        |Gone                         |
|411        |LengthRequired               |
|412        |PreconditionFailed           |
|413        |PayloadTooLarge              |
|414        |URITooLong                   |
|415        |UnsupportedMediaType         |
|416        |RangeNotSatisfiable          |
|417        |ExpectationFailed            |
|418        |ImATeapot                    |
|421        |MisdirectedRequest           |
|422        |UnprocessableEntity          |
|423        |Locked                       |
|424        |FailedDependency             |
|425        |UnorderedCollection          |
|426        |UpgradeRequired              |
|428        |PreconditionRequired         |
|429        |TooManyRequests              |
|431        |RequestHeaderFieldsTooLarge  |
|451        |UnavailableForLegalReasons   |
|500        |InternalServerError          |
|501        |NotImplemented               |
|502        |BadGateway                   |
|503        |ServiceUnavailable           |
|504        |GatewayTimeout               |
|505        |HTTPVersionNotSupported      |
|506        |VariantAlsoNegotiates        |
|507        |InsufficientStorage          |
|508        |LoopDetected                 |
|509        |BandwidthLimitExceeded       |
|510        |NotExtended                  |
|511        |NetworkAuthenticationRequired|
