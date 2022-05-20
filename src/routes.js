const express = require('express');
const routes = express.Router();

/* const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const Produto_usuarioController = require('./controllers/Produto_usuarioController');

// Usuario
routes.get("/usuarios/:usuarioId", UsusarioController.getById); */
















/* routes.get('/usuarios', (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json(usuarios);
});

routes.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    
    res.status(200).send({message: "Sucesso"});
});

routes.put('/usuarios/:usuarioId', (req, res) => {
    const { usuarioId } = req.params;
    const novoUsuario = req.body;

    let selectedIndex;
    let selected = usuarios.find((usuario, index) => {
        selectedIndex = index;
        return usuario.id === usuarioId
    });
    selected = { ...selected, ...novoUsuario };
    
    usuarios[selectedIndex] = selected;

    res.status(200).send({message: "Sucesso"});
});
 */

module.exports = routes;