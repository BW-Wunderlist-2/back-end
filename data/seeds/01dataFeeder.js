

exports.seed = function(knex) {
  const dataFeed = [
    {
      username: "example",
      password: "password",
      id: 1
    },
    {
      username: "sample",
      password: "pass",
      id: 2
    }

  ]
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert(dataFeed);
    });
};
