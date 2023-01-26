const User = require('../model/User');
const { findUser } = require('./FindUser');
const { note } = require('../model/NotesModel');

// const UserData =require('./methods/FindUser');

const AddNotes = async (NoteData) => {
    const notes = new note({
        title: NoteData.title,
        content: NoteData.content,
        email: NoteData.email,
        name: NoteData.name

    })
    notes.save().then(
        ()=>{
            return 'NOTE ADDED';
        }
    )
    .catch((err)=>{
        if(err=' MongoNetworkTimeoutError: connection timed out'){
            AddNotes(NoteData);
        }
        else{
            console.log('Error OCCURED \n',err);

        }
    });

}
module.exports = {
    AddNotes
}