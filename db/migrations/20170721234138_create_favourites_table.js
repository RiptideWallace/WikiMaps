exports.up = function(knex, Promise) {
  return knex.schema.createTable('favourites', function (table) {
    table.increments();
    table.integer('map_id').references('id').inTable('maps');
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favourites');
};
