import React from "react";
import './Expensedate.css';

const Expensedate = (props) => {

   const month = props.expenseData.date.toLocaleString("en-us",{month: "long"}) ;
   const year = props.expenseData.date.getFullYear();
   const date = props.expenseData.date.getDate();

   return(
             <div className="expensedate">
                          <div >{month}</div>
                           <div>{year}</div>
                           <div>{date}</div>
                </div>
   );
}

export default Expensedate;