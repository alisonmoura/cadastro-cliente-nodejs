const Express = require('express')

let app = new Express();

app.get("/", function(req, res){
  res.send("API Cadastro de Cliente v0.0.0") 
})

// Instaciar as rotas
const UsuarioRoute = require('./route/UsuarioRoute')
new UsuarioRoute(app);

app.listen(3000)