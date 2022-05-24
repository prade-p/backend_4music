const express = require('express');
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const ProdutoController = require("./controllers/ProdutoController");
const Produto_usuarioController = require("./controllers/Produto_usuarioController");

// Usuario
routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:usuario_id", UsuarioController.getById);
routes.put("/usuario/:usuario_id", UsuarioController.update);
routes.delete("/usuario/:usuario_id", UsuarioController.delete)

// Produto
routes.post("/produto", ProdutoController.create);
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.get("/produto/:categoria", ProdutoController.getByCategory);
routes.put("/produto/:produto_id", ProdutoController.update);
routes.delete("/produto/:produto_id", ProdutoController.delete)

// Produto_usuario
routes.post("/produto_usuario", Produto_usuarioController.create);
routes.get("/produto_usuario/:usuario_id", Produto_usuarioController.getById);
routes.delete("/produto_usuario/:usuario_id/:produto_id", Produto_usuarioController.delete)

module.exports = routes;