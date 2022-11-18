import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("roles", table => {
    table.text("id").primary();
    table.text("name").notNullable();
    table.text("description").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("roles")
}

