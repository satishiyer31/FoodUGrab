const router = require('express').Router();
const { Order_item, Order, Menu_item } = require('../../models');


//Get all orders
router.get('/',async(req,res) => {
    try{
        const orders = await Order.findAll();
        res.status(200).json(orders);
    }
    catch(err){
        json.status(500).json(err);
    }

});

//Get Orders by ID
router.get('/:id',async(req,res) => {
    try{
        //join with menu items via the order_item table
        const orders = await Order.findByPk(req.params.id, {include: [{model:Menu_item, through: Order_item, as: "item_orders"}, ]});
        res.status(200).json(orders);
    }
    catch(err){
        json.status(500).json(err);
    }

});




module.exports = router;