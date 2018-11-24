const UsuarioController = require('./../controller/UsuarioController')

module.exports = class UsuarioRoute {

    constructor(app) {
        app.get('/usuarios', UsuarioController.buscarTodos)
    }

}