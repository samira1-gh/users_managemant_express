const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('express', 'root', '', {
  host: 'localhost',
   dialect: 'mysql' 
});

module.exports = {sequelize};




    


