var assert = require('assert');

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

function reverse(str) {
  return str.split('').reverse().join('');
}

/********************************
 * YOUR CODE ABOVE HERE
 ********************************/

assert.equal(
  reverse('foo'),
  'oof'
);

assert.equal(
  reverse('race car'),
  'rac ecar'
);

console.log('Success!');
