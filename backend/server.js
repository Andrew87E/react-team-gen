const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const connectDB = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/employees', require('./routes/employeeRoutes'));

// connect to db before starting server
connectDB.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.rainbow);
  })
})



