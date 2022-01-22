import React from 'react';
function DetailsM({authorized}){
    return(
        <>
        <h1>Information about product </h1>
        <div className="Detailing">
            <div className="imgDetails">
            <img src='/mobiles.png'  alt ="pic"></img>
            </div>
            <div className="properties">
                <div className="row">
                <span> Model : Any  </span>
                <h2> Price : $00.00 </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. 
                Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit.
                 Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, 
                 in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, 
                 et commodo mauris tempor eget.
                </p>
                </div>
            </div>
        </div>
        </>
    )

}
export default DetailsM;