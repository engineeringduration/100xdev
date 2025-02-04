//craeting an http server
//expressss
//node deafault library=> no

const express =require("express");  //creating an object to make an object locally
// const app = express(); to initialize the express application 
// app.listen(3000)  to make an port avialable to listen our requests
const app = express();
function sum(n){
    let i=0,ans=0;
    for(i=0;i<=n;i++){
        ans=i+ans;
    }
    return ans;
}
app.get("/",function(req,res){
    const n= req.query.n;
    const ans = sum(n);
    const m=req.query.m;

    const a2=sum(m);
    // res.write("Hello World!\n");
    res.send("YOur answer is"+ans+"Second answer"+a2)
    res.end();
})
app.listen(3000,(req,res)=>{
    console.log("Poart is live at 3000")
})






// const express = require("express"); // Import Express
// const app = express(); // Initialize the Express application

// // Function to calculate the sum of numbers from 0 to n
// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// // Define a route to handle GET requests
// app.get("/", function (req, res) {
//     // Get `n` from query parameters and convert to a number
//     const n = parseInt(req.query.n, 10);

//     if (isNaN(n)) {
//         // Handle invalid or missing `n`
//         return res.status(400).send("Invalid or missing parameter 'n'");
//     }

//     // Calculate the sum
//     const ans = sum(n);

//     // Send the response
//     res.send(`Hello World! Your answer is: ${ans}`);
// });

// // Start the server on port 3000
// app.listen(3000, () => {
//     console.log("Server is live on port 3000");
// });
