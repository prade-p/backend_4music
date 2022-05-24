const express = require('express');
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const UsuarioValidator = require("./validators/UsuarioValidator");

const ProdutoController = require("./controllers/ProdutoController");
const ProdutoValidator = require("./validators/ProdutoValidator");

const Produto_usuarioController = require("./controllers/Produto_usuarioController");
const Produto_usuarioValidator = require("./validators/Produto_usuarioValidator");


// Session
routes

// Usuario
routes.post("/usuario", UsuarioValidator.create, UsuarioController.create);
routes.get("/usuario/:usuario_id", UsuarioValidator.getById, UsuarioController.getById);
routes.put("/usuario/:usuario_id", UsuarioValidator.update, UsuarioController.update);
routes.delete("/usuario/:usuario_id", UsuarioValidator.delete, UsuarioController.delete);

// Produto
routes.post("/produto", ProdutoValidator.create, ProdutoController.create);
routes.get("/produto/categoria/:categoria", ProdutoValidator.getByCategory,  ProdutoController.getByCategory);
routes.get("/produto/:produto_id", ProdutoValidator.getById,  ProdutoController.getById);
routes.get("/produto", ProdutoController.getAll);
routes.put("/produto/:produto_id", ProdutoValidator.update, ProdutoController.update);
routes.delete("/produto/:produto_id", ProdutoValidator.delete, ProdutoController.delete);

// Produto_usuario
routes.post("/produto_usuario", Produto_usuarioValidator.create, Produto_usuarioController.create);
routes.get("/produto_usuario/:usuario_id", Produto_usuarioValidator.getById, Produto_usuarioController.getById);
routes.delete("/produto_usuario/:usuario_id/:produto_id", Produto_usuarioValidator.delete, Produto_usuarioController.delete);

module.exports = routes;