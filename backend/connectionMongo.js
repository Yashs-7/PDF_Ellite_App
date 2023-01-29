const mongoose = require('mongoose');

const uri =process.env.MONGO_URI ;

const mongoConnect=()=>{

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => {
      console.log('Error connecting to DB', err.message);
      mongoConnect();
      console.log('Trying to Reconnect')
    }
    )
}

const db = mongoose.connection.collection('users');

// db.once('open', function () {
//   console.log("MongoDB database connection established successfully");
// })



module.exports = {
  mongoConnect,
  db

}
