<<<<<<< HEAD
const { Model, DataTypes } = require("squelize")
const bcrypt = require("bcrypt")
const sequelize = require("../config/connection")
=======
const { Model, DataTypes } = require('sequelize');
const bcrypt =  require('bcrypt');
const sequelize = require('../config/connection');
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584

class User extends Model {
  checkPassword (loginPw) {
    return bcrypt.compareSync(loginPw, this.password)
  }
}

User.init(
<<<<<<< HEAD
  {
    id: {
      types: DataTypes.INTEGAR,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      types: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
=======
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10)
        return newUserData
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    maodelName: "User"
  }
)

// 24 hours timer

module.exports = User
