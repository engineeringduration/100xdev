const express = require('express')
const app = express()
const port = 3000
//body-parser is an middle-ware for node that parse the incoming request bodies 
//and make them availabble for as object in tequest . body property
const bodyParser = require("body-parser");

app.use(bodyParser.json())   
app.post('/oop ',(req,res)=>{
    console.log(req.body);
    res.send('helloo worldd!!!');
})
app.get('/asds ',(req,res)=>{
    
    res.send('get at /oop');
})

//fs.read   
app.get('/', (req, res) => {
  res.send('Hello World!,  iam in express server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 