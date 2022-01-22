//import React from 'react';
import PhoneDetails from './PhoneDetails';
import CardsM from './CardsM';

function Mobiles(){
  return(
      <>
    {PhoneDetails.map((val) => {
    return(
      <CardsM image={val.image}
      name={val.name}
      model={val.model}
      price={val.price}
      description={val.description}
      />
          )
            })}
    </>
  );
}
export default Mobiles;