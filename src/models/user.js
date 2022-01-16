const {sequelize} = require('../config/db');
const { DataTypes, Model } = require('sequelize');

class User extends Model {
   
};

 
User.init(
{
    // Model attributes
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_name : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    user_email : {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    user_age : {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    }

}, 
    {
        timestamps: true,
        sequelize, //the connection instance
        modelName: 'User' // the model name
    }
);

module.exports = User;