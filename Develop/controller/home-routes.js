const router = require('express').Router();

router.get('/', (req,res) =>{
    
    res.render("index",{});
});

router.get('/restaurants', (req,res) =>{
    
    res.render("restaurants",{});
});


module.exports = router;