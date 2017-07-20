exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'me', email: 'me@me.com', password: 'me'}),
        knex('users').insert({id: 2, name: 'plz work', email: 'testing@test.com', password: 'test'})
      ]);
    });
};
