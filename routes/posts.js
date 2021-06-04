const express=require('express');
//import database schema
const Posts=require('../models/posts');


const router=express.Router();
//here we can use router, then can use htttp request

///save post
router.post('/post/save',(req,res)=>{
    let newPost=new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});



module.exports=router;
