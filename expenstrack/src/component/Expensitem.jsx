import React, {useState} from "react";
import Expensedate from "./Expensedate";
import "./Expensitem.css";


const Expensitem = (props) => {

    

 
   return(
      
    <div className="expenseitem">
       
       <Expensedate expenseData={props.expenseData}/> 
          
        <div className="item">{props.expenseData.item}</div>
        <div className="price">$ {props.expenseData.price}</div> 
          
         
    </div>

   );

}

export default Expensitem;

