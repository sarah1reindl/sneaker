import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 2));
  }, [products]); 

  return (
    <div className="my-10 p-8 rounded-lg shadow-neon-glow"> 
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400">
          Check out our best-selling products!
        </p>
      </div>

      
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {
        bestSeller.map((item,index)=>(
            <Productitem key={index} id={item.id}  name ={item.name} image={item.image} price={item.price}/>
        ))
    }

</div>
</div>
  )
}
    

export default BestSeller;
