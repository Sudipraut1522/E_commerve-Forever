import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductIItem from "./ProductIItem";

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProdut = products.filter((item) => (item.bestseller));
    setBestSeller(bestProdut.slice(0,5));
  },[]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aperiam, similique quibusdam totam, at facilis commodi tenetur cumque
          aliquid autem magnam. Alias nihil omnis doloribus. Blanditiis ullam
          atque est eveniet.
        </p>
      </div>
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller?.map((item, index) => (
          <ProductIItem
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
