import React, { useState } from "react";
import './Expense.css';
import Expenseitem from "./Expensitem";
import Filter from "./Filter";
import Chart from "./Chart";


const Expense = ({expenseData,month}) => {
     const [updatedfilteryear, setupdatedFilteryear] = useState("All");
    
     const filterdyear = (Selectedyear) => {
        //  console.log(Selectedyear);
         setupdatedFilteryear(Selectedyear);
         
     }

     let filterRecord = expenseData.filter((exp) => {
          if(updatedfilteryear === "All"){
              return exp;
          }
          else{ 
              return(
               exp.date.getFullYear().toString() === updatedfilteryear.toString()
               )
          }
            
     })

    //  console.log(filterRecord);

    return(
        
      <div className="expenses">
           <Filter filterdyear={filterdyear}/> 

           <Chart filterRecord={filterRecord}/>
         {
             filterRecord.map(row => {
                return(
                    
                    <Expenseitem expenseData={row} month={month} />
                );
             })
         }

          {/* <Expenseitem expenseData={expenseData[0]} month={month}/>
          <Expenseitem expenseData={expenseData[1]} month={month}/>
          <Expenseitem expenseData={expenseData[2]} month={month}/>
          <Expenseitem expenseData={expenseData[3]} month={month}/> */}
      </div>
    );
}

export default Expense;