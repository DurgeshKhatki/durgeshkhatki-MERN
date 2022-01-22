import React from 'react';
import PhoneDetails from './PhoneDetails';
function CardsM(props){
   
    return(
     <div className="cards">
         <div className="cardImg">
         <img src= {props.image} alt='pic'></img>
         
         <div className="cardDetails">
          
          <span className="cardCtgry">{props.name}</span>
          <h3 className="cardTitle">{props.model}</h3>
          <h2 className="cardprice">{props.price}</h2>
          <p className="cardPara">{props.description}</p>
          <button onClick={event => window.location.href='/DetailsM'}> Details </button>
           </div>
         
         </div>
     </div>
 );
}
export default CardsM;