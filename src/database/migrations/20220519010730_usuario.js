/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("usuario", function (table) {
    table.uuid("usuario_id").primary().notNullable();
    table.string("nome").notNullable();
    table.string("descricao").notNullable();
    table.string("endereco").notNullable();
    table.string("email").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("usuario");
};
