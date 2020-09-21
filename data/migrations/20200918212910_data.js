
exports.up = function(knex) {
    // main table 
  return  knex.schema
  
  // .createTable("users", function(table){
  //   table.increments();
  // })


  // user table
  .createTable("user", function(table){
    table.increments();

    table.string("username", 128).notNullable().unique().index();
    table.string("password", 256).notNullable();

    // table.integer("belongs").unsigned().references("users.id").onDelete("RESTRICT").onUpdate("CASCADE");


  })

  // task table


  .createTable("tasks", function(table){
      table.increments();
      table.string("task").notNullable();
      table.string("description");
      table.boolean("complete").notNullable();
      table.string("dueDate");
      
    
      table.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("user")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("user")
  .dropTableIfExists("tasks")
};
