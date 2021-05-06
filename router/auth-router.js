const router = require('express').Router()

const authController = require('../controller/auth-controller')

router.post('/register', (req, res) => {
    authController.register(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
        
})

router.post('/login', (req, res) => {
    authController.login(req.body)
    .then (result => res.json(result))
    .catch(err => res.json(err))
})


module.exports = router