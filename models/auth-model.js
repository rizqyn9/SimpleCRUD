const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    UserName: {
        type: String
    },
    Password: {
        type: String
    }
})

module.exports = mongoose.model('User', Users)