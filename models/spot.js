const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const spot = require('./Spot');

class Spot extends Model { }

Spot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        spot_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        steps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'spot',
    }
);

module.exports = Spot;