const express=require('express');
//import database schema
const Posts=require('../models/posts');


const router=express.Router();
//here we can use router, then can use htttp request


///save post
//////
router.route('/post/save').post((req,res)=>{
    const topic=req.body.topic;
    const description=req.body.description;
    const postCategory=req.body.postCategory;

    const newPost=new Posts({
        topic,
        description,
        postCategory,
    })

  newPost.save().then(()=>{
      res.json('Post created');
  }).catch((err)=>{
      console.log(err);
  });
});

//////


// router.post('/post/save',(req,res)=>{
//     let newPost=new Posts(req.body);
//     newPost.save((err)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Posts saved successfully"
//         });
//     });

// });

//get posts
//////

router.route('/').get((req,res)=>{
    Posts.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });
});
/////


// router.get('/posts',(req,res)=>{
//     Posts.find().exec((err,posts)=>{
//         if(err)
//         {
//             return res.status(400).json({
//                 error:err
//             });
//         }
       
//             return res.status(200).json({
//                 success:true,
//                 existingPosts:posts,
//             });
       
//     });

// });


//update post
/////
router.route('/post/update/:id').put(async(req,res)=>{

    let userId=req.params.id;

    const {topic,description,postCategory}=req.body;
    const updateStudent={
        topic,
        description,
        postCategory,
    }

    await Posts.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({status:"user Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err})
    })
})

//////

// router.put('/post/update/:id',(req,res)=>{
//     Posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"Updated Succesfully"});
//         }
//     );
// });

///delete posts

///
router.route('/post/delete/:id').delete(async (req,res)=>{
    let userId=req.params.id;

    await Posts.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User Daleted"});

    }).catch((err)=>{
        console.log(err.message);error:err})
    })
})


///

// router.delete('/post/delete/:id',(req,res)=>{
//     Posts.findOneAndRemove(req.params.id).exec((err,deletePost)=>{
//         if(err) return res.status(400).json({
//             message:"Delete Unsuccessful",err
//         });

//         return res.status(200).json({
//             message:"Delete Successful",
//             deletePost
//         });
//     });
// }); 



module.exports=router;
