const UsuarioService = require('./../service/UsuarioService')

module.exports = class UsuarioController {

    static buscarTodos(req, res) {
        res.json(UsuarioService.buscarTodos());
    }

}