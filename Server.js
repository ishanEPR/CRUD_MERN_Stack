const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
//convert javascript object to json object

////cors import= servers kihipayak tiyenwa ne
const cors=require('cors');



const app=express();

//import routes
const postRoutes=require('./routes/posts');

//app middleware
app.use(bodyParser.json());

app.use(cors());

//route middleware
app.use(postRoutes);


const PORT=8000;
const DB_URL='mongodb+srv://ishan97:19970330@cluster0.dbi3m.mongodb.net/student_db?retryWrites=true&w=majority';

//create database connection
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database connection successfull');
}).catch((err)=>{
    console.log('Database connection error');
})

app.listen(PORT,()=>{
    console.log('App is running on '+PORT);
}
);