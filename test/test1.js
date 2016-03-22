"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return function* (next) {
        this.body += '2'
        yield next
    };
};
