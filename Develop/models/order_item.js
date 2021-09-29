const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Order_item extends Model {
  
}

Order_item.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'order',
            key:'id',
            },
        },
    
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'menu_item',
            key:'id',
            },
        },
},
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_item',
  }
);

module.exports = Order_item;
