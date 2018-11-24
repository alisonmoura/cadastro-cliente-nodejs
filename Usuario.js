module.exports = class Usuario {

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    dizOla() {
        console.log("Olá " + this.nome)
    }

}