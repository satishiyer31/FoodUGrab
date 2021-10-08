const router = require('express').Router();

router.get('/', (req,res) =>{
    
    res.render("index",{});
});

router.get('/restaurants', (req,res) =>{
    
    res.render("restaurants",{});
});

router.get('/restaurant/:id', (req,res) =>{
    console.log('Reached Menu route');
    res.render("menu",{});
});

router.get('/paymentsuccess',(req,res)=>{
    console.log("reached checkout route");
    res.render("order",{});
})
module.exports = router;