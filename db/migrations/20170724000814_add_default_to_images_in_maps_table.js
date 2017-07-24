
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('maps', function(table){
      table.string('image_url').defaultTo('/images/default-map.png');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('maps', function(table){
      table.dropColumn('image_url');
    })
  ])
};
