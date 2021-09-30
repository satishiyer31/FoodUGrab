const router = require('express').Router();

router.get('/', (req,res) =>{
    console.log("Home reached")
    res.render("index",{});
});

module.exports = router;