const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  name: String,
  email: {type:String, required:true,unique:true},
  password: String,
  
}, { collection: 'users' });



const user = mongoose.model('user', userSchema);

const NewUser= async (body)=>{
  const newUser = new user({
    _id: new mongoose.Types.ObjectId(),
    name: body.name,
    email: body.email,
    password: body.password,
  });

  await newUser.save();
  return newUser
}

const Delete = async (body) => {
  const UserData = await user.findOne({ name: body.name, email: body.email });
  if (UserData.password === body.password) {

    user.findByIdAndDelete(UserData._id, (err, docs) => {
      if (err) {
        console.log(err);

      }
      else {
        console.log('Deleted item:\n');
        console.log(docs);
      }
    })
  }
  // connection.db.collection('data').find({})
  // User.remove({name:body.name,email:body.email,password:body.password})
  // console.log(user_id)
}

module.exports={
  user,
  Delete,
  NewUser
}