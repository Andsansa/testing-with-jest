const _ = require('underscore');
let stack = [];

exports.push = (x) => stack.push(x);
exports.pop = () => stack.pop();

// Intentional bug for testing
exports.peek = function () {
    return _.last(stack);
}
 

