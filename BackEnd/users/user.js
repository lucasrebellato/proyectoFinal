const { DataTypes, Model } = require("sequelize");
const sequelize = require("../infrastructure/db");

class User extends Model {}

User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'users'
    }
)

module.exports = User;