import React, { useState } from "react";
import Expenses from "./Expense";
import './Filter.css';


const Filter = (props) =>{
  
  const Yearselect = (e) => {
   const Selectedyear = e.target.value ;
   console.log(Selectedyear);
   props.filterdyear(Selectedyear);
  }

   
  
    
    return(
          <div className="end">
            <label >Filter by year</label>
              <select onClick={Yearselect}>
              <option value="All">All</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
          </div>

    );
}

export default Filter;