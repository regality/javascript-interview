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
  iterate(ast, function(node) {
    if (node.type === 'Identifier') {
      list.push(node.name);
    }
  });
  return uniq(list).sort();
}

function uniq(list) {
  return list.filter(function(v, i) {
    return !list.some(function(w, j) {
      return j > i && v === w;
    });
  });
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
  findIdentifiers('var x = 7;'),
  [ 'x' ]
);

var script = fs.readFileSync('sample.js').toString();

assert.deepEqual(
  findIdentifiers(script),
  [ "console", "foo", "i", "log", "str" ]
);

console.log('Success!');
