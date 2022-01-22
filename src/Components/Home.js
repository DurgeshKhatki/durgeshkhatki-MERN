import React, {useState, useEffect} from "react";
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import Category from './Category';

function Home(){
    
    const [productState, setProductState] = useState();
    const onChangeHandle = (e) => {
      const selectId= e.target.value;
      const selectProduct=Category.filter((c) => c.id == selectId)[0,1];
      setProductState(selectProduct);
    };
    useEffect(() => {
      setProductState(Category[0,1]);
    },[]);

    return (
        <>
        <h1>List of Product from </h1>
        <span className="optionsAre"> 
        <select className="selectOpt" value={productState?.id} onChange={(e)=> {
                 onChangeHandle(e);     
             }}>
             {Category.map((c)=>(
               <option key={c.id} value={c.id}>{c.name}</option>
             ))}
             </select>
        </span>

         {productState  ?  <Mobiles/> : <Laptops />}           
    </>
      );
}
export default Home;