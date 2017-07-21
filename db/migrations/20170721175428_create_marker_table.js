
exports.up = function(knex, Promise) {
  return knex.schema.createTable('markers', function (table) {
    table.increments();
    table.integer('maps_id').references('id').inTable('maps');
    table.string('title');
    table.string('outline');
    table.string('link');
    table.float('longitude');
    table.float('latitude');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('markers');
};
