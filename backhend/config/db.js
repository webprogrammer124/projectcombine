const mongoose = require('mongoose');
async function dbconnect(){
    try{
         await mongoose.connect('mongodb+srv://Seema:seema123@cluster0.h6ijj.mongodb.net/PostDB?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log("db connection")
    }
      catch(e){
          console.log(e)
      }
    
}
module.exports = dbconnect
