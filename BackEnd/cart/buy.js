const { DataTypes, Model } = require("sequelize");
const sequelize = require("../infrastructure/db");

class Buy extends Model {}

Buy.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: false
   
    }},
    {
        sequelize,
        modelName: 'Buy',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'buys'
    }
)

module.exports = Buy;