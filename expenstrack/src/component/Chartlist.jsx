import React from 'react';
import './Chartlist.css';


const Chartlist = (props) => {


    let barHeight = "0%";

    if(props.maxPrice > 0){
        barHeight= Math.round((props.price / props.maxPrice) * 100) + "%";
        console.log(barHeight);
    }
    return(
       <div className='chart-bar'>
           <div className='chartbar-inner'>
               <div className='chartbar-fill' style={{height: barHeight}}>
                   
               </div>
           </div>
       </div>
    );
}

export default Chartlist;