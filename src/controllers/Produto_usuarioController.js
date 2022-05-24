const Produto_usuarioModel = require('../models/Produto_usuarioModel');

module.exports = {
    async create(request, response) {
        try {
            const produto_usuario = request.body;

            const result = await Produto_usuarioModel.create(produto_usuario);
            return response.status(200).json({produto_usuario: result});
        } catch (err) {
            console.log("Produto_usuario creation failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to create produto_usuario",
            });
        }
    },

    async getById(request, response) {
        try {
            const { usuario_id } = request.params;         
            const result = await Produto_usuarioModel.getById(usuario_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto_usuario getById failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to get produto_usuario",
            });
        }
    },

    async delete(request, response) {
        try {
            const { usuario_id, produto_id } = request.params; 
                   
            const result = await Produto_usuarioModel.deleteByID( usuario_id, produto_id );
            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto_usuario delete failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to delete produto_usuario",
            });
        }
    }
}