'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    let plugins = [];

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    for (let item of args) {
        plugins.push(_interopRequireDefault(require(`koa-robots-plugin-${ item }`)).default());
    }

    return (0, _koaCompose2.default)(plugins);
};

var _koaCompose = require('koa-compose');

var _koaCompose2 = _interopRequireDefault2(_koaCompose);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}