const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Restaurant extends Model {
  
}

Restaurant.init(
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
    type :{
    type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10],
          },
      },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    

  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'restaurant',
  }
);

module.exports = Restaurant;
