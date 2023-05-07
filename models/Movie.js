const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        format:{
            type:DataTypes.STRING,
            allowNull: true
        },
        watched:{
            type:DataTypes.BOOLEAN,
            allowNull:true,
            defaultValue: false,
            trueValue: 'Yes',
            falseValue:'No',
        },
        img:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        },
        rating:{
            type:DataTypes.DECIMAL,
            allowNull:true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:true
        }
    },
    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'movie'
    }
)

module.exports = Movie;