import React, {useState} from "react";
import './Newexpense.css';
import Expenseform from "./Expenseform";






const Newexpense = (props) => {

    
   

   const formData = (data) => {
    // console.log("data from new",data);
    
    props.formData(data);
   } 

    
    return(
       <Expenseform formData={formData}/>
    );
}

export default Newexpense;
