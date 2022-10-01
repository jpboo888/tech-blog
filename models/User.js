const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync();

class User extends Model {
    
    async checkPassword(loginPW) {  
             bcrypt.hash(loginPW, 10, function(err, hash) {
          if (err) { throw (err); }

        bcrypt.compare(loginPW, hash, function(err, result) {
            if (err) { throw (err); }
            console.log(result);
        });
        });
}
   }


User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    }
}, 

{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;