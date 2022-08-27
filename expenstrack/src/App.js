


import Expense from './component/Expense';
import Newexpense from './component/Newexpense';
import Expenseform from './component/Expenseform';
import { useState } from 'react';
import Filter from './component/Filter';



function App ()  {

  // const month = ["null" ,"jan", " feb", "mar", "apr", "may","jun","july","aug","sep","oct","nov","dec"];
   
 
  

  const dummyData = [
    {
      id: "exp1",
      date: new Date(2022, 1, 23),
      item: "New TV",
      price: 900
    },

    {
      id: "exp2",
      date: new Date(2021, 6, 3),
      item: "car Insurance",
      price: 500
    },

    {
      id: "exp3",
      date: new Date(2021, 11, 23),
      item: "New Desk",
      price: 300
    },

    {
      id: "exp4",
      date: new Date(2021, 4, 23),
      item: "New car",
      price: 1000
    },

  ];

  // console.log(expenseData[0]);
  
  const [expenseData,setExpenseData] = useState(dummyData);
  
   

  const formData = (data) => {
    console.log("data from App",data); 
    setExpenseData([data ,...expenseData]);
    // console.log(expenseData);
   }
  
  return(
      <div>
          
        
        
          <Newexpense formData={formData} />
          <Expense expenseData={expenseData}  />
      </div>
  );
}

export default App;
