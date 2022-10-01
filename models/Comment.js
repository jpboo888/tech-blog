const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create Comment class
class Comment extends Model {}

//blueprint for Comment class
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        validate: {
            len: [3]
        }
    },
    //Keys provided from relating models user and post
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
},

//set table boundries
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

//export statement
module.exports = Comment;