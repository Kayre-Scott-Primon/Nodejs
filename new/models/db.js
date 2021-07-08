const Sequelize = require('sequelize');

const sequelize = new Sequelize('postapp', 'root' , 'windows8-9' , {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = {
     Sequelize: Sequelize,
     sequelize: sequelize
}