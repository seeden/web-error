"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseError = _interopRequire(require("base-error"));

var StatusCode = _interopRequire(require("./statuscode"));

var WebError = (function (_BaseError) {
		function WebError(status, message, errors) {
				_classCallCheck(this, WebError);

				status = status || 500;
				errors = errors || [];

				message = message || StatusCode[status];
				console.log(message);

				_get(Object.getPrototypeOf(WebError.prototype), "constructor", this).call(this, message);

				this.status = status;
				this.errors = errors;
		}

		_inherits(WebError, _BaseError);

		return WebError;
})(BaseError);

module.exports = WebError;

WebError.prototype.name = "WebError";
WebError.StatusCode = StatusCode;