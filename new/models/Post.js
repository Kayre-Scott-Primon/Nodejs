const db = require('./db')

const Post = db.sequelize.define('postagens' , {
     titulo: {
          type: db.Sequelize.STRING
     },
     conteudo: {
          type: db.Sequelize.TEXT
     }
})

//post.sync({force: true}) reescreve toda vez que chamado

module.exports = Post