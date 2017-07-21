exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        knex('maps').insert({id: 1, user_id: 1, name: 'Restaurants', description: 'Places to eat in Victoria BC', image_url: '/images/map1.png'}),
        knex('maps').insert({id: 2, user_id: 1, name: 'Tourist Spots', description: 'Visit these gorgous locations!', image_url: '/images/map2.png'}),
        knex('maps').insert({id: 3, user_id: 2, name: 'Parks', description: 'Nice places to be outside', image_url: '/images/map3.png'})
      ]);
    });
};
