// definindo e carregando modulos

     const express = require('express')
     const handlebars = require('express-handlebars')
     const bodyParser = require('body-parser')
     const app = express()
     const mongoose = require('mongoose')

//Configurações
     //body-parser
          app.use(bodyParser.urlencoded({extended: true}))
          app.use(bodyParser.json())
     
     //handlebars
         app.engine('handlebars', handlebars({defaultLayout: 'main'}))
         app.set('view engine', ' handlebars')

     //mongoose
     
     //

//Rotas 


//Outros
     const PORT = 8081
     app.listen(PORT, () => {
          console.log("servidor rodando")
     })