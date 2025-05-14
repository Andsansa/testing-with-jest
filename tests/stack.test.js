const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined();
});

test('peek on stack with elements returns top element', () => {
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(); // This will fail initially
});

