const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const connectDB = require('./backend/config/db')
const path = require('path')

const publicPath = path.join(__dirname, 'frontend', 'dist');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/employees', require('./backend/routes/employeeRoutes'));
app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// connect to db before starting server
connectDB.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.rainbow);
  })
})



