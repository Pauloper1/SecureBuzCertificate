const User = require('../models/User')

const index =(req,res,next)=>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occurred'
        })
    })
}
//Show 
const show = (req,res,next)=>{
    let userID = req.body.userID
    User.findById(userID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occurred'
        })
    })
}

//add new user
const store =(req,res,next)=>{
    let user = new User({
        b_name: req.body.b_name,
        b_size: req.body.b_size,
        b_type: req.body.b_type,
        b_address: req.body.b_address,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    .then(response =>{
        res.json({
            message: 'User added'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occurred'
        })
    })
}

//update user
const update =(req,res,next)=>{
    let user =req.body.userID

    let updateData= {
        b_name: req.body.b_name,
        b_size: req.body.b_size,
        b_type: req.body.b_type,
        b_address: req.body.b_address,
        email: req.body.email,
        password: req.body.password
    }
    User.findByIdAndUpdate(userId, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'User updated'
        })
    })
    
    .catch(error =>{
        res.json({
            message: 'An error occurred'
        })
    })
}

//delete
const destroy =(req,res,next)=>{
    let user =req.body.userID
    User.findIdAndRemove(userID)
    .then(()=>{
        res.json({
            message: 'User deleted'
        })
    })
    
    .catch(error =>{
        res.json({
            message: 'An error occurred'
        })
    })
}

module.exports={
    index,store,update,destroy
}
