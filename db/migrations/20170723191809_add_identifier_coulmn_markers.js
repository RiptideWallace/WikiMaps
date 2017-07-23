
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('markers', function(table){
      table.string('identifier');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('markers', function(table){
      table.dropColumn('identifier')
    })
  ])
};
