const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

<<<<<<< HEAD:models/Post.js
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
=======
class Wave extends Model{}

Wave.init(
    {
      spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,        
    },  
    steps: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584:models/Wave.js
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
<<<<<<< HEAD:models/Post.js
    modelName: "post"
=======
    modelName: 'wave',
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584:models/Wave.js
  }
)

<<<<<<< HEAD:models/Post.js
module.experts = Post
=======
module.exports = Wave;
>>>>>>> 66e425a3ee9292259a1fa462d16ba553cc314584:models/Wave.js
