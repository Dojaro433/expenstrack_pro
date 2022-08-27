import React, {useState} from "react";
import './Expenseform.css';

import axios from "axios";
const Expenseform = (props) =>{

   
    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [displayform, setDisplayform] = useState(false);

     const submitHandler = (e) => {
         e.preventDefault();
        let data ={
            item: title,
            price: amount,
            id: Math.ceil(Math.random()),
            date: new Date(date),
        }
        
        setTitle("");
        setAmount(0);
        setDate("");
        
        props.formData(data);

        axios.post("http://localhost:5000/rairs", data)

     }
        //    const updateTilte = (e) => {
        //   e.preventDefault(e);
        //    console.log(e.traget.value);
        //          setTitle(e.traget.value);
           //        console.log("Title=", title);
          //    }
    
    return(
       <div className="expenseform">
           <form onSubmit={submitHandler} className={displayform ? "formShow" : "formHide"} > 
                  <div className="title">
                     <label>Title</label> <br/>
                      <input type="text" onChange={e => setTitle(e.target.value)} value={title} required placeholder="Enter Tilte"/>
                 </div>
 
                 <div className="amount">
                     <label>Amount  </label> <br/>
                      <input type="Number" onChange={e => setAmount(e.target.value)} value={amount} placeholder="Enter amount"/>
                 </div> 
                 

                 <div className="date">
                     <label>Date</label> <br/>
                      <input type="date" onChange={e => setDate(e.target.value)} value={date} />
                 </div>
                  
                  <div className="submit" >
                        <button type="Submit" onSubmit={submitHandler} onClick={() => setDisplayform(!displayform)}>Add Expense</button>
                 </div>
           </form>
           <div className="newExp" >

           <button onClick={() => setDisplayform(!displayform)} className={displayform ? "formHide" : "formShow"} >Add New Expense</button>

           </div>
       </div>
    );
}

export default Expenseform;
