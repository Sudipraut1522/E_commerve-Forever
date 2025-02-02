import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();

  const { products, currency } = useContext(ShopContext);
  console.log("products", products);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((items) => {
      if (items._id === productId) {
        setProductData(items);
        setImage(items.image[0]);
        console.log(items);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/*Product dara */}
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reserve gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((items, index) => (
              <img
                onClick={() => setImage(items)}
                src={items}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                key={index}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*product info */}

        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData?.price}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData?.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <button className="py-3 px-8 bg-black  text-center text-white text-sm active:bg-gray-700">
                Add To Cart
              </button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 f;ex f;ex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on Delivary is availale</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
      </div>
      <div className="flex flex-col text-gray-600  py-4 text-sm gap-y-2 border border-gray-100">
        <p>
          An Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          blanditiis accusamus unde, quod harum voluptas odit soluta, veniam
          consequatur eaque distinctio esse suscipit ab dolore labore nihil?
          Dolore, sequi repellat.e commerce website is an online platform that
          facilate the buying and selling cloths
        </p>
        <p>
          E-commerce websites typically display product or services alonh with
          detailed information.
        </p>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
