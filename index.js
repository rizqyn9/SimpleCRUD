const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

const PORT = 5000
const URIS = 'mongodb://localhost:27017/penjualanpulsa'

app.use(express.json())

mongoose.connect(URIS,{useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false})
    .then(()=> console.log("Terhubung ke Database"))
    .catch(err => console.log(err))

const pulsaRouter = require('./router/pulsa-router')
const authRouter = require('./router/auth-router')
app.use('/auth', authRouter)
app.use('/pulsa', pulsaRouter)


app.listen(PORT, () => {
    console.log(`Berjalan di http://localhost:${PORT}`);
})