const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Wave extends Model{}

Wave.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "spot",
          key: "id"
        }       
    },  
    steps: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wave',
  }
)

module.exports = Wave;
