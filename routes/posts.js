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

//get posts

router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            });
        }
       
            return res.status(200).json({
                success:true,
                existingPosts:posts,
            });
       
    });

});


//update post
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"});
        }
    );
});

///delete posts

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findOneAndRemove(req.params.id).exec((err,deletePost)=>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.status(200).json({
            message:"Delete Successful",
            deletePost
        });
    });
}); 



module.exports=router;
