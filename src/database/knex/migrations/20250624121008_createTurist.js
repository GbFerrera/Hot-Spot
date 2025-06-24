exports.up = function (knex) {
    return knex.schema.createTable('turist', (table) => {

        table.string("name").notNullable()
        table.integer("age").notNullable()
        table.string("state").notNullable()
        table.string("city").notNullable()
        table.string('destination').notNullable();
        table.string('interest').nullable();
        table.string('phone').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('turist');
};
