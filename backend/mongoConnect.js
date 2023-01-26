const mongoose=require('mongoose');

const atlasuri = 'mongodb+srv://rohit_29:Rohit%40123457@cluster0.phmztef.mongodb.net/notes?retryWrites=true&w=majority';
// const atlasuri= process.env.atlasuri;
function connection(){



mongoose.connect(atlasuri,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to database');
    }) 
    .catch((err) => {
      console.log('Error connecting to DB', err.message);
      connection();
      console.log('Trying to Reconnect')
    }
    );
  
  
  
 
  
}
exports.connection = connection;
exports.db=   mongoose.connection;
