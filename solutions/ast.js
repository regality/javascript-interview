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
  iterate(ast, function(node) {
    if (node.type === 'Identifier') {
      list.push(node.name);
    }
  });

  list.sort();

  for (var i = 0; i < list.length; ++i) {
    if (list[i] === list[i + 1]) {
      list.splice(i, 1);
      i -= 1;
    }
  }
  return list;
}

function iterate(tree, fn) {
  if (typeof tree === 'object' && tree !== null) {
    fn(tree);
    for (var i in tree) {
      iterate(tree[i], fn);
    }
  }
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
