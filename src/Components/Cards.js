import React from 'react';
//import {useNavigate } from 'react-router-dom';
//import Details from '../Details';
function Cards(props){
   
  

      return(
       <div className="cards">
           <div className="cardImg">
           <img src= {props.image} alt='pic'></img>
           
           <div className="cardDetails">
            
            <span className="cardCtgry">{props.name}</span>
            <h3 className="cardTitle">{props.model}</h3>
            <h2 className="cardprice">{props.price}</h2>
            <p className="cardPara">{props.description}</p>
            <button onClick={event => window.location.href='/Details'}> Details </button>
             </div>
           
           </div>
       </div>
   );
}
export default Cards;