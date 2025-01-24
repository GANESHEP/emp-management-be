//external module
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


// Local module
const employeeRoute = require('./routes/employee.routes');

require('dotenv').config({ path: './env' });
app.use(bodyParser.json()); 

const PORT = process.env.PORT || 5000;  // Fallback to port 5000

// Use employee routes
app.use('/employee', employeeRoute);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/emp-management-system")
  .then(() => console.log('MongoDB is connected'))
  .catch(error => console.log('MongoDB connection error:', error));

// Default route
app.use((req, res, next) => {
  res.send(`<h1>page is not found </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
