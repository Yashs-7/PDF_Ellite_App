// const express =require('express');
// const { UpdateNote, DeleteNote } = require('../methods/updateNote');
// const { getUser } = require('../schemas/UserSchema');

// const noteRouter = express.Router();

// noteRouter.post('/addNote', async (req,res)=>{
//   const addcheck = await AddNote(req.body);
//   console.log(addcheck);
 
// if(addcheck.acknowledged===true){
//   res.status(200).json('Note Added');
// }
// else{
//   res.status(500).json({message:"can't update note, either network error or surver under process"});

// }
// })

// noteRouter.post('/deleteNote', async (req,res)=>{
//   const  delcheck =await DeleteNote(req.body);
//   console.log(delcheck)
//   res.status(200).json(delcheck)
// } )

// module.exports = noteRouter;

