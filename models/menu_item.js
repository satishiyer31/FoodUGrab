const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Menu_item extends Model {
  
}

Menu_item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description :{
        type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    
    restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurant',
            key:'id',
          },
      },
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu_item',
  }
);

module.exports = Menu_item;
