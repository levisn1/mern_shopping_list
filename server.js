const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //get data from the body, name from a post of instance

const app = express();       //initialize express in a variable

// Bodyparser Middleware
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI; //we assign the keys files to a variable to get the mongoURI

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));
