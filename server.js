const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //get data from the body, name from a post of instance

const items = require('./routes/api/items');

const app = express();    //initialize express in a variable

// Bodyparser Middleware
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI; //we assign the keys files to a variable to get the mongoURI

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes

app.use('/api/items', items);


const port = process.env.PORT || 5000; //we create  a variable with the port we are going to use, process.env.PORT if it's and env variable for HEROKU

app.listen(port, () => console.log(`Server started on port ${port}`)); //we want our app that listen to that port and with a call back send a message
