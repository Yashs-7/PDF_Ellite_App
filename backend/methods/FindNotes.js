
//in this file finding user data 



const mongoose = require('mongoose');
const {note} = require('../model/NotesModel');


// const user = User.User;
async function findNotes(email) {


    const NotesData = await note.find({ email: email })
        .then(
            () => {

                console.log('Notes Found')
                    // console.log(NotesData)
            }

        )
        .catch((err) => {
            console.log('Notes not found')
        })
    return NotesData;

}

exports.findNotes = findNotes;