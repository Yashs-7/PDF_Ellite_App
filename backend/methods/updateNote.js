const { User } = require("../schemas/UserSchema");
const mongoose = require("mongoose");
const { db } = require("../connectionMongo");

const AddNote = async (body) => {
    const { email, password, title, content } = body;

    try {
      return {message: await  db.updateOne({ email: email }, {
            $push: {
                notes: {
                    $position: 0,
                    _id: new mongoose.Types.ObjectId(),
                    title: title,
                    content: content,
                    date: (new Date()).getDate(),
                    time: (new Date()).getTime()
                }
            }
        }),
        status:200
    }

    } catch (error) {
        return({status:404,message:'email not exist'})
    }

}


const DeleteNote= async (body)=>{
    const {email,note_id}=body;
    try{
        const result =await db.updateMany({ email: email }, {
            $pullAll : {
                notes:[ {
                        "_id":note_id
                     }]
            }
        });
        return result;
    }
    catch(error){
        console.log(error);
        
    }

}

module.exports = { AddNote,DeleteNote }