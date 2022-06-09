const connection = require("../database/connection");

module.exports = {
  async create(relacao) {
    const result = await connection("produto_usuario").insert(relacao);
    return result;
  },

  async getById(usuario_id) {
    const result = await connection("produto_usuario")
      .where({ usuario_id })
      .select("*")
    return result;
  },

  async getProdutosById(usuario_id) {
    const result = await connection("produto_usuario")
      .innerJoin("produto", "produto_usuario.produto_id", "produto.produto_id")
      .where({ usuario_id })
      .select("produto.*")
    return result;
  },

  async getIsProdutoFavorite(usuario_id, produto_id) {
    const result = await connection("produto_usuario")
      .where({ usuario_id, produto_id })
      .select("*")
      if (!result.length) {return false;}
      return true;
  },

  async deleteByID(usuario_id, produto_id) {
      const result = await connection("produto_usuario").where({ usuario_id}).where({ produto_id}).delete();
      return result;
  }
};
