import * as stack from './stack.js';

window.onload = () => {
  const display = document.getElementById('top_of_stack');
  const pushBtn = document.getElementById('push');
  const popBtn = document.getElementById('pop');
  const peekBtn = document.getElementById('peek');

  pushBtn.addEventListener('click', () => {
    const value = prompt('Enter a value:');
    stack.push(value);
    display.textContent = value;
  });

  popBtn.addEventListener('click', () => {
    const popped = stack.pop();
    alert(`Popped: ${popped}`);
  });

  peekBtn.addEventListener('click', () => {
    display.textContent = stack.peek();
  });
};

