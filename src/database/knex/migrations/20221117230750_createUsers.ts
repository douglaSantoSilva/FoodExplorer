import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.text("email").unique().notNullable();
    table.text("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  })

}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users")
}

