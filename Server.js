const express=require('express');
const app=express();

const PORT=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Crud Application");

})

app.listen(3000,()=>{console.log('Server is running on http://localhost:3000')});