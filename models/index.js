const Order = require('./order');
const Customer = require('./customer');
const Restaurant = require('./restaurant');
const Menu_item = require('./menu_item');
const Order_item = require('./order_item');


// Define a Customer as having many orders, thus creating a foreign key in the `Order` table
Customer.hasMany(Order, {
    foreignKey: 'customer_id',
    onDelete: 'SET NULL',
  });
  
  // Create association from the Order side
Order.belongsTo(Customer, {
    foreignKey: 'customer_id',
  });

// Define a Restaurant as having many orders, thus creating a foreign key in the `Order` table
Restaurant.hasMany(Order, {
    foreignKey: 'restaurant_id',
    onDelete: 'CASCADE',
  });
  
  // Create association from the Order side to the Restaurant
Order.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
  });


// Define a Restaurant as having many menu_items, thus creating a foreign key in the `Menu_item` table
Restaurant.hasMany(Menu_item, {
    foreignKey: 'restaurant_id',
    onDelete: 'CASCADE',
  });
  
  // Create association from the Menu_item side to the Restaurant
Menu_item.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
  });


//M:M relationship between Order and Menu_item

Order.belongsToMany(Menu_item, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Order_item,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'order_item'
  });
  
  Menu_item.belongsToMany(Order, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Order_item,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'order_item'
  });



module.exports = { Order, Customer, Restaurant,Menu_item,Order_item };