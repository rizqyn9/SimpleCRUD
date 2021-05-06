const mongoose = require('mongoose')

const DataPulsa = new mongoose.Schema({
    Harga: {type: Number},
    BesarPulsa : {type : Number},
    Waktu: {type : Date}
})


module.exports = mongoose.model('Pulsa',DataPulsa)