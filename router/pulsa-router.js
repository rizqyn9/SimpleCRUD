const router = require('express').Router()
const PulsaController = require('../controller/pulsa-controller')

router.get('/',(req,res) => {
    res.status(200).json({
        pesan : "Selamat datang di penjualan pulsa"
    })
})

router.post('/create' , (req,res) => {
    PulsaController.Create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getid/:id',(req,res) => {
    PulsaController.GetID(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall',(req,res) => {
    PulsaController.GetAll()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/edit/:id',(req,res) => {
    PulsaController.Update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    PulsaController.DeleteID(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

module.exports = router