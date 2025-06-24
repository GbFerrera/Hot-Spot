exports.up = function (knex) {
    return knex.schema.createTable('avaliationEvent', (table) => {

    table.integer("avaliation").notNullable()
    table.string("comment").notNullable()
    table.string("improvements").notNullable()

    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('avaliationEvent');
};
  