import React from 'react';
import Cards from './Cards.js';
import CardDetail from './CardDetail.js';


function Laptops(){
    return(
        <>
    {CardDetail.map((val) => {
    return(
      <Cards image={val.image}
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
export default Laptops;