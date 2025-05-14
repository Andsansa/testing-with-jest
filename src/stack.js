const _ = require('underscore');
let stack = [];

exports.push = (x) => stack.push(x);
exports.pop = () => stack.pop();
exports.peek = () => stack[0]; // Intentional bug for testing

