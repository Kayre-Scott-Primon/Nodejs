const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root' , 'windows8-9' , {
     host: 'localhost',
     dialect: 'mysql'
});

sequelize.authenticate().then(function(){ //caso ter sucesso
     console.log("Conectado com sucesso!")
}).catch(function(erro){ // caso tenha falha
     console.log("Falha ao conectar: " + erro)
});

// criar models sem escrever em MySQL

//definindo
const postagem = sequelize.define('postagens', {
     titulo: {
          type: Sequelize.STRING
     },
     conteudo: {
          type: Sequelize.TEXT
     }
})

//sincronizar o model com mysql
//postagem.sync({force: true});




const Usuario = sequelize.define('usuarios', {
     nome: {
          type: Sequelize.STRING
     },
     sobrenome: {
          type: Sequelize.STRING
     },
     idade: {
          type: Sequelize.INTEGER
     },
     email : {
          type: Sequelize.STRING
     }
}) 

//Usuario.sync({force: true})


//inserir dados 

postagem.create({
     titulo: "um titulo qualquer",
     conteudo: "Um teste de adicionar dados no modulo"
})

Usuario.create({
     nome: "victor",
     sobrenome: " lucas",
     idade: 20,
     email: "victorlucas@teste.com"
})


