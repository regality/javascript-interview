var esprima = require('esprima')
  , assert  = require('assert')
  , fs      = require('fs')
  ;

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

function findVariables(js) {
  var ast = esprima.parse(js);
  var list = [];
  return list;
}

/********************************
 * YOUR CODE ABOVE HERE
 ********************************/

assert.deepEqual(
  findVariables('var x = 7;'),
  [ 'x' ]
);

var script = fs.readFileSync('sample.js').toString();

assert.deepEqual(
  findVariables(script),
  [ "console", "foo", "i", "log", "str" ]
);

console.log('Success!');
