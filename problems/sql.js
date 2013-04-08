var assert = require('assert');

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

function parse(sql) {
  return {};
}

/********************************
 * YOUR CODE ABOVE HERE
 ********************************/

assert.deepEqual(
  parse('SELECT * FROM foo'),
  {
    operation: 'SELECT',
    table: 'foo',
    columns: '*'
  }
);

assert.deepEqual(
  parse('SELECT bar, baz FROM foo'),
  {
    operation: 'SELECT',
    table: 'foo',
    columns: [ 'bar', 'baz' ]
  }
);

assert.deepEqual(
  parse('DELETE FROM foo'),
  {
    operation: 'DELETE',
    table: 'foo'
  }
);

assert.deepEqual(
  parse('DELETE foo'),
  {
    error: 'Parse error'
  }
);

assert.deepEqual(
  parse('INSERT INTO foo'),
  {
    error: 'INSERT not supported'
  }
);

console.log('Success!');
