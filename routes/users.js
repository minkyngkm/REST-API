const express = require('express')
const router = express.Router()
const User = require('../models/users')

// get all 
router.get('/', async (req, res) =>{
    try{
        const users = await User.find()
        res.send(users)

    }catch(error){
        res.status(500).json({message : error.message})
    }
})

// get one
router.get('/:id', (req, res) =>{
    // res.send(res.params.id)
})

// create one
router.post('/', async (req, res) =>{
    const user = new User({
        username : req.body.username,
        password: req.body.password
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)

    }catch(err){
        res.status(400).json({message : err.message})
    }
})


// update one
router.patch('/:id', (req, res) =>{

})


// delete one 
router.delete('/:id', (req, res) =>{

})

module.exports = router