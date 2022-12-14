import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("permissions_roles", table => {
    table.text('role_id').references('id').inTable('roles');
    
    table.text('permission_id').references('id').inTable('permissions');
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("permissions_roles")
}

