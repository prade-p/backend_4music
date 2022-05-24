const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(produto) {
    const produto_id = uuidv4();
    produto.produto_id = produto_id;


    await connection("produto").insert(produto);
    return produto_id;
  },

  async getById(produto_id) {
    const result = await connection("produto")
      .where({ produto_id })
      .select("*")
      .first();
    return result;
  },

  async getByCategory(categoria) {
    const result = await connection("produto")
    .where({ categoria })
    .select("*")
    
  return result;
  },

  async updateById(produto_id, produto) {
      const result = await connection("produto").where({ produto_id }).update(produto);
      return result;
  },

  async deleteByID(produto_id) {
      const result = await connection("produto").where({ produto_id }).delete();
      return result;
  }
};
