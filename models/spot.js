const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const spot = require('./spot');

class spot extends Model { }

spot.init(
    {
        spot_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        steps: {
            type: DataTypes.STRING,
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

module.exports = spot;