import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('point_items', table => {
        table.increments('id').notNullable();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('point_items');
}