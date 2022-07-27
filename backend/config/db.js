const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.MONGO,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoose.connection;
