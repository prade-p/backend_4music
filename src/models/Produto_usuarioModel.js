const connection = require("../database/connection");

module.exports = {
  async create(realacao) {
    const result = await connection("relacao").insert(realacao);
    return result;
  },

  async getById(usuario_id) {
    const result = await connection("relacao")
      .where({ usuario_id })
      .select("*")
    return result;
  },

  async updateById(usuario_id, relacao) {
      const result = await connection("relacao").where({ usuario_id }).update(relacao);
      return result;
  },

  async deleteByID(usuario_id) {
      const result = await connection("relacao").where({ usuario_id }).delete();
      return result;
  }
};
