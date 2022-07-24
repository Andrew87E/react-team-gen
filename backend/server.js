const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const connectDB = require('./config/db')
const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/employees', require('./routes/employeeRoutes'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})


