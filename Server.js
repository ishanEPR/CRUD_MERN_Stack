const express=require('express');
const mongoose=require('mongoose');

const app=express();

const PORT=8000;
const DB_URL='mongodb+srv://ishan97:19970330@cluster0.dbi3m.mongodb.net/student_db?retryWrites=true&w=majority';

app.listen(PORT,()=>{
    console.log('App is running on '+PORT);
}
);