const express = require('express');
const { User, CreateUser, getUser } = require('../schemas/UserSchema');
const bcrypt = require('bcrypt')
const apiRouter = express.Router();


apiRouter.post('/signup', async (req, res) => {

    try {
        let data = await CreateUser({ name: req.body.name, email: req.body.email, password: req.body.password });
        console.log(data)
        res.status(data.status).json(data.message)
    }
    catch (error) {
        console.log(error);
    }

})

apiRouter.post('/login',async (req,res)=>{
    try {
        let data = await getUser({ email: req.body.email, password: req.body.password });
        console.log(data)
        if(data.user){
            res.status(data.status).json(data.user)
        }
        else{
            res.status(data.status).json(data.message)
        }
    }
    catch (error) {
        console.log(error);
    }

})

    module.exports = apiRouter;