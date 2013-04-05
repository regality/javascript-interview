var esprima = require('esprima')
  , assert  = require('assert')
  , fs      = require('fs')
  ;

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

function findIdentifiers(js) {
  var ast = esprima.parse(js);
  var list = [];
  return list;
}

/********************************
 * YOUR CODE ABOVE HERE
 ********************************/

assert.deepEqual(
  findIdentifiers('var x = 7;'),
  [ 'x' ]
);

var script = fs.readFileSync('sample.js').toString();

assert.deepEqual(
  findIdentifiers(script),
  [ "console", "foo", "i", "log", "str" ]
);

console.log('Success!');
