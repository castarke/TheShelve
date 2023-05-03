const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
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
            allowNull: false
        },
        watched:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false,
            trueValue: 'Yes',
            falseValue:'No',
        },
        img:{
            type: DataTypes.STRING,
            allowNull: true
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