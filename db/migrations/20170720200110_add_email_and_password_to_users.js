
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.string('email');
      table.string('password');
      table.unique('email');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.dropUnique('email');
      table.dropColumn('email');
      table.dropColumn('password');
    })
  ])
};
