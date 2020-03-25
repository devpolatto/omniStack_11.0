
exports.up = function(knex) {
   return knex.schema.createTable('incidents', (table) => {
      //campos:
      table.increments()
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      //relacionamentos
      table.string('ong_id').notNullable();
      //foreingkey
      table.foreign('ong_id').references('id').inTable('ongs')
   })
};

exports.down = function(knex) {
  
};
