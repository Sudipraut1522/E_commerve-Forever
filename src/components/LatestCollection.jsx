import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { use } from "react";
import ProductIItem from "./ProductIItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(()=>{
     setlatestProducts(products.slice(0,10))

  },[])
  return (
    <div className="my-10">
      <div className="text-center py-8 text-xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste
          dolore tempora at illo, aliquid est unde vero optio dolores
          repudiandae id placeat nemo quasi ab cupiditate? Ex, dolorum magnam.
        </p>
      </div>
{/* Rendring product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ls:grid-cols-5 gap-4 gap-y-6">
     {
latestProducts?.map((item,index)=>(
  <ProductIItem id={item._id} image={item.image} name={item.name} key={index} price={item.price}/>
))

     }
      </div>
    </div>
  );
};

export default LatestCollection;
