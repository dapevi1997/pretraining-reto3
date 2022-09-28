const mongoose = require('mongoose');

const URLDb = 'mongodb+srv://dapevi:abc123.@cluster0.wtraqfs.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    mongoose.connect(URLDb, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB conected'))
        .catch(err => console.log(err))
}

module.exports = {connect};