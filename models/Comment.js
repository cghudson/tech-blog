//comments - comment text
const sequelize = require("../config/config");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
    {
        comment: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Comment
