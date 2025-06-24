exports.up = function (knex) {
    return knex.schema.createTable('event', (table) => {

    table.string("howIMet").notNullable()
    table.string("motivation").notNullable()
    table.string("position").notNullable()
    table.string("companyName").notNullable()
    table.string("acting").notNullable()

    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('event');
};
