const mongoose = require('mongoose')

const DataPulsa = new mongoose.Schema({
    NoTelpon: {type: String},
    Nama : {type : String},
    Operator : {type : String},
    Nominal : {type : String}
})


module.exports = mongoose.model('Pulsa',DataPulsa)