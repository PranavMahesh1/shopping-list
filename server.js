const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Configs DB
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true})
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
