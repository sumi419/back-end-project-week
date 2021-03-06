exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (note) => {
    note.increments();

    note.string('title').notNullable();

    note.string('textBody').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
