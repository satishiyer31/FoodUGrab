const router = require('express').Router();
const { Order_item, Order, Menu_item } = require('../../models');

router.post('/', async(req,res) => {
    // try{
    console.log("order Item: ", req.body);   
    const order = await Order_item.create(req.body);
        res.status(200).json(order);

    // }catch(err){
    //     res.status(400).json(err);
    // }
})

module.exports = router;