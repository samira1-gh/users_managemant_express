const {sequelize} = require('../config/db');
const { DataTypes, Model } = require('sequelize');

class dep extends Model {
   
};

 
dep.init(
    {
        // Model attributes
  
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: {
                notEmpty: true,
            }
        },
        // id : {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     primaryKey: true,
        // },
        dep_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        dep_descreption: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        timestamps: true,
        sequelize, //the connection instance
        modelName: 'dep' // the model name
    }
);

module.exports = dep;


