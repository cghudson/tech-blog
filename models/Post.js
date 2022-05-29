//model for posts - title and contets
const sequelize = require("../config/config");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
    {
        title :  DataTypes.STRING,
        content: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post
