/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("produto_usuario", function (table) {
        table.string("usuario_id").notNullable();
        table.foreign("usuario_id").references("usuario_id").inTable("usuario").onDelete("cascade");
        table.string("produto_id").notNullable();
        table.foreign("produto_id").references("produto_id").inTable("produto").onDelete("cascade");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("produto_ussuario");
};
