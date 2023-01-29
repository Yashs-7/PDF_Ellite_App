const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

let Userschema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    notes:[
        {   _id:{type:String},
            title:{type:String,required:true},
            content:{type:String,required:true},
            date: {type:String},
            time:{type:String}
        }
    ] 
        
}, { collection: 'users' });


const User = mongoose.model('user', Userschema);

const CreateUser = async (body) => {

    let checkUser = await User.findOne({ email: body.email }).select('name')
    console.log(checkUser)
    //checkUser={ _id: '63d4c73722762a554a1680e5', name: 'rohitk' }



    if (checkUser) {
        return { status: 404, message: 'Email already exists' };
    }
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(body.password, salt);

    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: body.name,
        email: body.email,
        password: newPass,
        notes: []
    });

    await newUser.save();
    console.log(newUser._id)

    return { status: 200, message: newUser };

}


const getUser = async ({ email, password }) => {
    let checkUser = await User.findOne({ email: email }).select('name')
    if (checkUser) {
        try {
            let user = await User.findById(checkUser._id);
            console.log(user)
            const salt = await bcrypt.genSalt(6);
            const newPass = await bcrypt.hash(password, salt);

            const passwordCompare = await bcrypt.compare(password, user.password);
            console.log(passwordCompare)

            if(passwordCompare){
                return {user,message:"user found",status:200}
            }
            else{
                return {message:"enter Correct password",status:500}
            }
        }
        catch (error) {
            console.log(error)
            return { status: 404 }
        }
    }
    else {
        return { status: 300, message: "Please register first" }
    }
}



module.exports = { User, CreateUser, getUser };