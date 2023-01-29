const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const { mongoConnect } = require('./connectionMongo');
const { AddNote, DeleteNote } = require('./methods/updateNote');


const app = express();
const port = 5000;

mongoConnect()
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use('/api/user', require('./routes/general'));

// app.use('api/notes',require('./routes/notes'))
app.post('/api/notes/addNote', async (req, res) => {
    const resp = await AddNote(req.body)
    console.log(resp)
    if (resp.message.modifiedCount === 0) {
        res.status(404).json({ message: "Email not exist" })
    }
    else {
        res.status(200).json({ message: "Note added" })
    }

});

app.post('/api/notes/deleteNote',async (req,res)=>{
    const resp=await DeleteNote(req.body);
    console.log(resp);
    res.json({message:"delete note"})
});



app.listen(port, () => {
    console.log(`running at localhost:${port}`)
})
