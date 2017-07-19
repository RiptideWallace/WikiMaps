exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        knex('maps').insert({name: 'Restaurants'}),
        knex('maps').insert({name: 'Tourist Spots'}),
        knex('maps').insert({name: 'Parks'})
      ]);
    });
};
