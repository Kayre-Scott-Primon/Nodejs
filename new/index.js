const express = require("express")
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser')
const Post = require('./models/Post.js')

/* //conexao com bd
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root' , 'windows8-9' , {
     host: 'localhost',
     dialect: 'mysql'
});*/
/*
sequelize.authenticate().then(function(){ //caso ter sucesso
     console.log("Conectado com sucesso!")
}).catch(function(erro){ // caso tenha falha
     console.log("Falha ao conectar: " + erro)
});
*/

//config  
     //tamplate Engine

     app.engine('handlebars', handlebars({extname:'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layout/'}))
     app.set('view engine', 'handlebars');

     //body parser

     app.use(bodyparser.urlencoded({extended: false}))
     app.use(bodyparser.json())
     
     //na sua rota deve estar assim
     app.get('/cad', function(req, res) {
         res.render('formulario.handlebars');
     });

     app.post('/add', function(req, res){

          Post.create({
               titulo: req.body.titulo,
               conteudo: req.body.conteudo,
          }).then(function() {
               //res.send("Post sucess!")
               res.redirect('/')
          }).catch(function(erro){
               res.send("Post Error: "+erro)
          })
     })

     app.get('/', function(req, res) {
          Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
               console.log(posts)
               res.render('home', { posts: posts })
          })
     })

     //Deletar

     app.get('/deletar/:id', function(req,res){
          Post.destroy({where: {'id': req.params.id }})
          .then(function(){
               res.send("Postagem deletada com sucesso!")
          }).catch(function(error){
               res.send("essa postagem não existe! - " + error)
          })
     })
     
app.listen(8081, function(){
     console.log("Servidor rodando");
});