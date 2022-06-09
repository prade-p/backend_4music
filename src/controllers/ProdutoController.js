const ProdutoModel = require('../models/ProdutoModel');

module.exports = {
    async create(request, response) {
        try {
            const produto = request.body;

            const result = await ProdutoModel.create(produto);
            return response.status(200).json({produto_id: result});
        } catch (err) {
            console.log("Produto creation failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to create produto",
            });
        }
    },

    async getById(request, response) {
        try {
            const { produto_id } = request.params;         
            const result = await ProdutoModel.getById(produto_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto getById failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to get produto",
            });
        }
    },

    async getAll(request, response) {
        try {        
            const result = await ProdutoModel.getAll();

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto getById failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to get produto",
            });
        }
    },

    async getByCategory(request, response) {
        try {
            const { categoria } = request.params;         
            const result = await ProdutoModel.getByCategory(categoria);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto getById failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to get produto",
            });
        }
    },

    async update(request, response) {
        try {
            const { produto_id } = request.params; 
            const produto = request.body;        
            await ProdutoModel.updateById(produto_id, produto);

            return response.status(200).json({ notification: "Produto updated successfully"});
        } catch (err) {
            console.log("Produto update failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to update produto",
            });
        }
    },

    async delete(request, response) {
        try {
            const { produto_id } = request.params; 
            const result = await ProdutoModel.deleteByID(produto_id);

            if (result === 0)
                return response.status(400).json({ notification: "Produto_id not found"});
        
            return response.status(200).json({ notification: "Produto deleted successfully"});
        } catch (err) {
            console.log("Produto delete failed: " + err);
            return response.status(500).json({
                notification: "Internal server error while trying to delete produto",
            });
        }
    },
}