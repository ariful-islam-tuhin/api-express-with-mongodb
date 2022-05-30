const express = require('express')
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000
require('dotenv').config();
const bodyParser = require('body-Parser');

app.use(bodyParser.json());


// import route 
const postRoute = require('./routs/posts');


// kind of middleware
app.use('/posts',postRoute);




mongoose.connect("mongodb://localhost:27017/express-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected true")
})

   


// Routes
app.get('/',(req,res) => {   
    res.send('we are on home') 
});




// how to start listening to the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
