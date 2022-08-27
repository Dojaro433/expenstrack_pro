import React from 'react';
import "./Chart.css";
import Chartlist  from './Chartlist';


const Chart  = (props) => {

     let chartDataPoints = [
         {label: "Jan", price: 0},
         {label: "Feb", price: 0},
         {label: "Mar", price: 0},
         {label: "Apr", price: 0},
         {label: "May", price: 0},
         {label: "June", price: 0},
         {label: "July", price: 0},
         {label: "Aug", price: 0},
         {label: "Sep", price: 0},
         {label: "Oct", price: 0},
         {label: "Nov", price: 0},
         {label: "Dec", price: 0},
     ];

     for (let record of props.filterRecord){
         let month = record.date.getMonth();
         chartDataPoints[month].price = record.price;
     }

     let priceArray = props.filterRecord.map(row => row.price);
     let maxPrice = Math.max(...priceArray);

       //  console.log(maxPrice);

    return(
        <div className="chart">
           {
           chartDataPoints.map( record => {
               return(
            <Chartlist label={record.label} price={record.price} maxPrice={maxPrice}/>
               );
            })
           
           }


         
        </div>
    );
}

export default Chart;