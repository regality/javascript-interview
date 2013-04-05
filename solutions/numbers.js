var assert = require('assert');

var numberGetters = [];

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

for (var i = 1; i <= 10; ++i) {
  (function(i) {
    numberGetters[i] = function() {
      return i;
    }
  })(i);
}

/********************************
 * YOUR CODE ABOVE HERE
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
