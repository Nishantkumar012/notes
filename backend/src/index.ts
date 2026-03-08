// import express from 'express';

import app from "./app";
const PORT = 3000;


app.listen(PORT,()=>{
     
      console.log(`server is running on port ${PORT}`)
})

// const app = express();
// const PORT = 3000;


// app.get("/",(req,res)=>{
       
//      res.send("hello");
// })

// app.listen(PORT,()=>{
        
//     //    res.send("hello");
//        console.log("running on port 3000")
// })

// // console.log("hello")