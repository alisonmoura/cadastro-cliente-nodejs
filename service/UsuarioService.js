module.exports = class UsuarioService {

    static buscarTodos() {
        return [
            {
                nome: "Jão da Silva",
                email: "jao@gmail.com"
            },
            {
                nome: "Maria da Silva",
                email: "mar@gmail.com"
            }
        ]
    }

}