const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/customers', customerRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/menu', menuRoutes);
router.use('/order', orderRoutes);

module.exports = router;