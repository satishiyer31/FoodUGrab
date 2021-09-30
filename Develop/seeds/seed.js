const sequelize = require('../config/connection');
const { Customer, Restaurant, Menu_item,Order,Order_item } = require('../models');

const CustomerSeedData = require('./CustomerSeedData.json')
const RestaurantSeedData = require('./RestaurantSeedData.json');
const MenuItemSeedData = require('./MenuItemSeedData.json');
const OrderSeedData = require('./OrderSeedData.json');
const OrderItemSeedData = require('./OrderItemSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const customers = await Customer.bulkCreate(CustomerSeedData);
    
    if (customers){
        console.log("Customers Seeded: " + customers);
    }
    const restaurants = await Restaurant.bulkCreate(RestaurantSeedData);

    if (restaurants){
        console.log("restaurant Seeded: " + restaurants);
    }
    const menu = await Menu_item.bulkCreate(MenuItemSeedData);
    if (menu){
        console.log("Menu Seeded: " + menu);
    }
    const order = await Order.bulkCreate(OrderSeedData);

    if (order){
        console.log("Order Seeded: " + order);
    }

    const orderItem = await Order_item.bulkCreate(OrderItemSeedData);
    if (orderItem){
        console.log("OrderItems Seeded: " + orderItem);
    }
}

seedDatabase();