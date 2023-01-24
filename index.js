const express = require('express');
const mongoose = require('mongoose');
const connection = require('./mongoConnect')
const fs = require('fs');
const { user, Delete, NewUser } = require('./model/User');
const { findUser } = require('./methods/FindUser');
const { findNotes } = require('./methods/FindNotes');
const { AddNotes } = require('./methods/AddNotes');
const { channel } = require('diagnostics_channel');
//connectiong to database
const PORT = 5000 || process.env.PORT;

connection.connection();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const home = fs.readFileSync('home.html')

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html')
  res.send(home);
});




app.post('/signup', async (req, res) => {
  if (req.body.check === 'on') {

    const newUser = await NewUser(req.body);

    console.log(` New User: ${newUser._id}`)

    const demoNote = {
      email: req.body.email,
      title: 'Demo Note',
      content: 'This is Demo Note',
      name: newUser.name,
    }
    AddNotes(req.body, demoNote);
  }
  // console.log(userData)
  res.send("SUBMITED");
  // notes(req.body);


});






// PROBLEM IN LOGIN SEE AGAIN


app.post('/login', (req, res) => {
  console.log(req.body);

  const userData = findUser(req.body);

  // use terniray opreraor to find user data validation
  const NotesData = findNotes(userData.email)
  console.log(NotesData)

});

app.post('/add-note', (req, res) => {
  const NoteData = {
    email: req.body.email,
    name: req.body.name,
    title:req.body.title,
    content:req.body.content
  }
   AddNotes(NoteData);
}
)








app.use(express.json());
app.use(express.urlencoded());

app.post('/delete', (req, res) => {

  console.log('DEleting User ')
  // console.log(req.body);
  req.body.check === 'on' ? Delete(req.body) : console.log('Plz try later');

  res.send("Deleted");


})

app.listen(PORT, () => {
  console.log(`started as http://localhost:/${PORT}`);
})