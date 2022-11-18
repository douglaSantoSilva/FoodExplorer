import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users_permissions", table => {
    table.integer('user_id').references('id').inTable('users');
    table.text('permission_id').references('id').inTable('permissions');
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users_permissions")
}


