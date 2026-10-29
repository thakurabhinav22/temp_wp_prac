// Express require installtion of Node env and Express
//  ====== Installtion command  ======
// npm init -y 
// npm install express

let express = require("express")

let app = express()

app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/plain");
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("Server is listening on Port 3000")
})





//========== Smaller Code =================

// let express = require("express")

// let app = express()

// app.get("/",(req,res)=>{
//     res.setHeader("Content-type", "text/json")
//     res.send("Hello World")
// }).listen(3000)