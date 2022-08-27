const express = require("express");

const app = express();

const conn = require("./db");

const abcd = require("./routes/rairs")


const cors = require("cors");
const path = require("path");






// app.get((req, res)=>{


// res.send("This is from backend");

// })



// conn.connection.on("connected", (err)=>{

//     if(err){
//     console.error(err);
    
//     }
    
//     else{
    
//         console.log("Connected to MongoDB");
//     }
    
    
    
//     })

app.use(express.json());
app.use(cors());
app.use("/rairs", require("./routes/rairs"));
         


if(process.env.NODE_ENV === 'production'){

    app.use('/',express.static('expenstrack/build'));

    app.get('*',(req,res)=>{


     res.sendFile(path.resolve(__dirname, 'expenstrack/build/index.html'))

    })
}


const PORT= process.env.PORT || 5000;
  


app.listen(PORT, ()=>{


console.log("Node js Server has Started");


})



