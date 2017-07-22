exports.seed = function (knex, Promise) {
  return knex('favourites').del()
    .then(function () {
      return Promise.all([
        knex('favourites').insert({id: 1, map_id: 1, user_id: 1}),
        knex('favourites').insert({id: 2, map_id: 2, user_id: 2}),
        knex('favourites').insert({id: 3, map_id: 3, user_id: 2}),
      ]);
    });
}
