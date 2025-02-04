const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
connectDB();

app.get('/', (req, res) => {
  res.send('Hello Rahulll !');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

    //"mongodb+srv://rmane0069:Mongo1234@cluster0.oymb0.mongodb.net/"