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
router.get('/:id', getUser, (req, res) =>{
    res.json(res.user)
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
router.patch('/:id', getUser, (req, res) =>{

})


// delete one 
router.delete('/:id', getUser, (req, res) =>{
    try{
        res.user.remove()
        res.json({message: "user deleted"})
    }catch(err){
        res.status(500).json({message: message.err})
    }
    
})

// middleware function 
async function getUser( req, res, next ){
    let user 
    try{
        user = await User.findById(req.params.id)
        if(user == null){
        return res.status(404).json({message : "cannot find the user"})
        }
    }catch(err){
        return res.status(500).json({message: message.err})
    }
    res.user = user
    next()
}

module.exports = router