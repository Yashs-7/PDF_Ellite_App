const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
        },
    name:{
        type: String,
    }
}
,{
    collection:'notes'
})

const note =mongoose.model('notes',noteSchema)

module.exports ={ note};