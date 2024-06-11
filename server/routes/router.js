const express = require('express');
const {user} = require('../db/models');

const router = express.Router();

router.get('/',async (req,res)=>{
    const result = await user.findAll();
    if(result){
        res.json(res);
    }else{
        console.log('fuck',res === undefined);
        res.json({"damn":"it"});
    }
});

module.exports = router;