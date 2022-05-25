const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UsuarioController = require("./controllers/UsuarioController");
const UsuarioValidator = require("./validators/UsuarioValidator");

const ProdutoController = require("./controllers/ProdutoController");
const ProdutoValidator = require("./validators/ProdutoValidator");

const Produto_usuarioController = require("./controllers/Produto_usuarioController");
const Produto_usuarioValidator = require("./validators/Produto_usuarioValidator");

const SessionController = require("./controllers/SessionController");

// Session
routes.post("/login", SessionController.signIn);

// Usuario
routes.post("/usuario", UsuarioValidator.create, UsuarioController.create);
routes.get("/usuario/:usuario_id", UsuarioValidator.getById, auth.authenticateToken, UsuarioController.getById);
routes.put("/usuario/:usuario_id", UsuarioValidator.update, auth.authenticateToken, UsuarioController.update);
routes.delete("/usuario/:usuario_id", UsuarioValidator.delete, auth.authenticateToken, UsuarioController.delete);

// Produto
routes.post("/produto", ProdutoValidator.create, auth.authenticateToken, ProdutoController.create);
routes.get("/produto/categoria/:categoria", ProdutoValidator.getByCategory, ProdutoController.getByCategory);
routes.get("/produto/:produto_id", ProdutoValidator.getById, ProdutoController.getById);
routes.get("/produto", ProdutoController.getAll);
routes.put("/produto/:produto_id", ProdutoValidator.update, auth.authenticateToken, ProdutoController.update);
routes.delete("/produto/:produto_id", ProdutoValidator.delete, auth.authenticateToken, ProdutoController.delete);

// Produto_usuario
routes.post("/produto_usuario", Produto_usuarioValidator.create, auth.authenticateToken, Produto_usuarioController.create);
routes.get("/produto_usuario/:usuario_id", Produto_usuarioValidator.getById, auth.authenticateToken, Produto_usuarioController.getById);
routes.delete("/produto_usuario/:usuario_id/:produto_id", Produto_usuarioValidator.delete, auth.authenticateToken, Produto_usuarioController.delete);

module.exports = routes;