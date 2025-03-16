import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import db from './utlis/DB';
import userRoutes from './routes/user.routes';

const app=express();
const PORT=process.env.PORT || 3000;

app.use(
  cors({
    origin:process.env.BASE_URL,
    methods:["GET","POST","DELETE","Options"],
    allowedHeaders:["Content-Type","Authorization"]
  })
);

db();

app.use("/api/v1/users",userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello from express");
})

app.get('/sourav',(req,res)=>{
    res.send("Hello from sourav");
})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})