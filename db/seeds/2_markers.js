exports.seed = function (knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, maps_id: 1, title: 'Red Fish Blue Fish', outline: 'Popular sea food spot near the inner harbour', link: 'test', longitude: -123.370271, latitude: 48.424343, identifier: 'A'}),
        knex('markers').insert({id: 2, maps_id: 1, title: 'Ferris Oyster Bar', outline: 'Some of the best oysters in town', link: 'test2', longitude: -123.369044, latitude: 48.427012, identifier: 'B'}),
        knex('markers').insert({id: 3, maps_id: 1, title: 'Pink Bicycle', outline: 'The perfect place for burger lovers', link: 'test3', longitude: -123.362862, latitude: 48.423767, identifier: 'C'}),
        knex('markers').insert({id: 4, maps_id: 1, title: 'Tacofino', outline: 'Fill your taco craving', link: 'test3', longitude: -123.362997, latitude: 48.424134, identifier: 'D'}),
        knex('markers').insert({id: 5, maps_id: 1, title: 'Shine Cafe', outline: 'Victoria isnt Victoria without its great brunch places', link: 'test3', longitude: -123.362178, latitude: 48.426697, identifier: 'E'}),
        knex('markers').insert({id: 6, maps_id: 2, title: 'Royal BC Museum', outline: 'Learn about our countries history', link: 'test2', longitude: -123.367397, latitude: 48.419820, identifier: 'A'}),
        knex('markers').insert({id: 7, maps_id: 2, title: 'Craigdarroch Castle', outline: 'Explore some of Vicotria"s history', link: 'test3', longitude: -123.343561, latitude: 48.422694, identifier: 'B'}),
        knex('markers').insert({id: 8, maps_id: 2, title: 'Fort Rodd Hill', outline: 'Learn about the islands millitary past', link: 'test3', longitude: -123.447579, latitude: 48.430441, identifier: 'C'}),
        knex('markers').insert({id: 9, maps_id: 2, title: 'Government House', outline: 'Experience the grounds of this stunning property', link: 'test3', longitude: -123.342165, latitude: 48.418578, identifier: 'D'}),
        knex('markers').insert({id: 10, maps_id: 2, title: 'Mile Zero', outline: 'Come see the western start of the Trans Canada Highway', link: 'test3', longitude: -123.366251, latitude: 48.411371, identifier: 'E'}),
        knex('markers').insert({id: 11, maps_id: 3, title: 'Beacon Hill Park', outline: 'Come get some ice cream and hang out with goats', link: 'test3', longitude: -123.363118, latitude: 48.412683, identifier: 'A'}),
        knex('markers').insert({id: 12, maps_id: 3, title: 'Fishermans Wharf', outline: 'Great food, trendy homes and seals!', link: 'test3', longitude: -123.382873, latitude: 48.422643, identifier: 'B'}),
        knex('markers').insert({id: 13, maps_id: 3, title: 'Dallas Beach', outline: 'Time for some beach combing!', link: 'test3', longitude: -123.362022, latitude: 48.408503, identifier: 'C'}),
        knex('markers').insert({id: 14, maps_id: 3, title: 'Highrock Park', outline: 'A great hike with great views of the city', link: 'test3', longitude: -123.406632, latitude: 48.434332, identifier: 'D'}),
        knex('markers').insert({id: 15, maps_id: 3, title: 'Willows Beach', outline: 'Great food and views of the Gulf Islands', link: 'test3', longitude: -123.303606, latitude: 48.433760, identifier: 'E'}),
      ]);
    });
}
