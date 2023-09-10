import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('books', (table) => {
    table.datetime('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('books', (table) => {
    table.dropColumn('created_at');
  });
}
