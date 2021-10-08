const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
const orderItemRoutes= require('./orderItemRoutes');

router.use('/customers', customerRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/orderitems',orderItemRoutes);

module.exports = router;