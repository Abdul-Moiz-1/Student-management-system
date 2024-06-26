const express=require("express");
const app=express();
const dotenv=require("dotenv").config();

const port= 5000;

app.use("/api/students", require("./Routes/studentRoutes"));

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

