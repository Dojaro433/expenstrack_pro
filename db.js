
const mongoose = require("mongoose");



var mongoDBURl ="mongodb+srv://vaibhav:vaibhav@cluster0.0yocw.mongodb.net/expenstrack"


mongoose.connect(mongoDBURl, {useUnifiedTopology:true, useNewUrlParser:true});


var  dbconnect = mongoose.connection


dbconnect.on("connected", (err)=>{

   if(err){
   console.error(err);
           
   }
   
   else{
   
       console.log("Connected to MongoDB");
   }
   
   
   
   })
            
    
    
     

module.exports = mongoose;

