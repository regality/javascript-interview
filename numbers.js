var assert = require('assert');

var numberGetters = [];

/********************************
 * YOUR CODES HERE
 ********************************/

for (var i = 1; i <= 10; ++i) {
  numberGetters[i] = function() {
    return i;
  }
}

/********************************
 * YOUR CODES HERE
 ********************************/

assert.equal(
  numberGetters[5](),
  5
);

assert.equal(
  numberGetters[10](),
  10
);

console.log('Success!');
