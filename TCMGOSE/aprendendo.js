const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/aprendendo" , {
     useMongoClient: true
})
.then(() => { console.log("MongoDB conectado!")})
.catch((err) => { console.log("Houve um erro ao conectar: "+err)})

//definir model

const UserSchema = mongoose.Schema({
     nome: {
          type: String,
          require: true     //ser obrigatorio
     },
     sobrenome: {
          type: String,
          require: true
     },
     email: {
          type: String,
          require: true
     },
     idade: {
          type: Number,
          require: true
     },
     pais: {
          type: String
     }
})

mongoose.model('users', UserSchema)       //como se fosse a tabela, mas é uma collection

//inserir novo documentos

const user = mongoose.model('users')

new user ({
     nome: 'victor',
     sobrenome: 'lima',
     email: 'lucaslima@exemple.com',
     idade: 20,
     pais: "Brasil"
}).save()
.then(() => {console.log("Usuario criado com sucesso!")})
.catch((err) => {console.log("Houve um erro ao cadastrar: "+err)})