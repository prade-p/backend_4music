const UsuarioModel = require('../models/UsuarioModel');


module.exports = {
    async create(request, response) {
        try {
            const usuario = request.body;

            const result = await UsuarioModel.create(usuario);
            return response.status(200).json({usuario_id: result});
        } catch (err) {
            console.log("Usuario creation failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to create usuario",
            });
        }
    },

    async getById(request, response) {
        try {
            const { usuario_id } = request.params;         
            const result = await UsuarioModel.getById(usuario_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Usuario getById failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to get usuario",
            });
        }
    },

    async update(request, response) {
        try {
            const { usuario_id } = request.params; 
            const usuario = request.body; 

            await UsuarioModel.updateById(usuario_id, usuario);

            return response.status(200).json({ notification: "Usuario updated successfully"});
        } catch (err) {
            console.log("Usuario update failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to update usuario",
            });
        }
    },

    async delete(request, response) {
        try {
            const { usuario_id } = request.params; 
            const result = await UsuarioModel.deleteByID(usuario_id);

            if (result === 0)
                return response.status(400).json({ notification: "Usuario_id not found"});
            
            return response.status(200).json({ notification: "Usuario deleted successfully"});
        } catch (err) {
            console.log("Usuario delete failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to delete usuario",
            });
        }
    },
};