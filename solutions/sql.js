var assert = require('assert');

/********************************
 * YOUR CODE BELOW HERE
 ********************************/

function parse(sql) {
  sql = sql.split(' ');
  var operation = sql[0];
  switch (operation) {
    case 'SELECT':
      return parseSelect(sql);
    case 'DELETE':
      return parseDelete(sql);
    default:
      return { error: operation + ' not supported' };
  }
}

function parseSelect(sql) {
  var columns = []
    , table;

  sql.shift(); // remove operation

  if (sql[0] === '*') {
    columns = '*'
    sql.shift();
  } else {
    while (sql[0] !== 'FROM') {
      var column = sql.shift();
      if (!column) return { error: 'Parse error' };
      if (column.charAt(column.length - 1) === ',') {
        column = column.slice(0, column.length - 1);
      }
      columns.push(column);
    }
  }

  if (sql.shift() !== 'FROM') return { error: 'Parse error' }
  table = sql.shift();

  return {
    operation: 'SELECT',
    table: table,
    columns: columns
  }
}

function parseDelete(sql) {
  if (sql[1] !== 'FROM') return { error: 'Parse error' };
  return {
    operation: 'DELETE',
    table: sql[2]
  }
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
