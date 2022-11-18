import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users_roles", table => {
    table.text('role_id').references('id').inTable('roles');
    table.integer('user_id').references('id').inTable('users');
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users_roles")
}


