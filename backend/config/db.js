const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect("mongodb+srv://andrew87e:BRattney6689@cluster0.hjtnp.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoose.connection;
