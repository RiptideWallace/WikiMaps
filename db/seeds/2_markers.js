exports.seed = function (knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, maps_id: 1, title: 'Cadboro Bay', outline: 'One of the best parks in Victoria', link: 'test', longitude: -123.2956, latitude: 48.4585}),
        knex('markers').insert({id: 2, maps_id: 1, title: 'Mt. Doug', outline: 'Great view of the city', link: 'test2', longitude: -123.3455, latitude: 48.4924}),
        knex('markers').insert({id: 3, maps_id: 1, title: 'Beacon Hill Park', outline: 'Hanging with goats', link: 'test3', longitude: -123.3631, latitude: 48.4127}),
        knex('markers').insert({id: 4, maps_id: 2, title: 'Mt. Doug', outline: 'Great view of the city', link: 'test2', longitude: -123.3455, latitude: 48.4924}),
        knex('markers').insert({id: 5, maps_id: 3, title: 'Beacon Hill Park', outline: 'Hanging with goats', link: 'test3', longitude: -123.3631, latitude: 48.4127}),
      ]);
    });
}
