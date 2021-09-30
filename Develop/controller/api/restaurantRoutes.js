const router = require('express').Router();
// const { json } = require('sequelize/types');
const { Menu_item,Restaurant } = require('../../models');
// const {Restaurant} = require('../../models/restaurant');

//Get all restaurants
router.get('/',async(req,res) => {
    try{
        const restaurants = await Restaurant.findAll();
        res.status(200).json(restaurants);
    }
    catch(err){
        json.status(500).json(err);
    }

});

//Get restuarant by ID
router.get('/:id',async(req,res) => {
    try{
        const restaurants = await Restaurant.findByPk(req.params.id, {include: [{model:Menu_item}]});
        res.status(200).json(restaurants);
    }
    catch(err){
        json.status(500).json(err);
    }

});




module.exports = router;