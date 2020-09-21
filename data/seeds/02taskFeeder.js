
exports.seed = function(knex) {
  const taskFeeder = [{
    task: "hello",
    description: ";asmdlsnkcs",
    complete: false,
    id: 1,
    user_id: 1,
    dueDate: "september 29"
  },
  {
    task: "hello there",
    description: ";asmdlsnkcs",
    complete: false,
    id: 3,
    user_id: 1,
    dueDate: "september 29"
  },
{
  task: "helloagain",
  description: ";asmdlsnkcsdasdasdfsdgrevdf edcer",
  complete: true,
  id: 2,
  user_id: 2,
  dueDate: "spetember 28"
}]
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(taskFeeder);
    });
};
