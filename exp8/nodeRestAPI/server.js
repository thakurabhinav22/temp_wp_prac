// let server = require("http")

// let app = server.createServer((req, res) =>{
//     res.setHeader("Content-Type", "text/json");
//     res.end("Hello World")
// })

// app.listen(3000,()=>{
//     console.log("Server is Listning on port 3000")
// })

// ======================= Smaller Version ==========================

let server = require("http")

server.createServer((req,res)=>{
    res.end("Hello Wolrd")
}).listen(3000);