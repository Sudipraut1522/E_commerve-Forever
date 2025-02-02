import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductIItem from "../components/ProductIItem";

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProdducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setSortType] = useState("low-high");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((pre) => pre.filter((item) => item !== e.target.value));
    } else {
      setCategory((pre) => [...pre, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((pre) => pre.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((pre) => [...pre, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProdducts(productCopy);
  };

  const sortProduct = () => {
    let fCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProdducts(fCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProdducts(fCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    console.log(sortType, "sortType");
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/*Category Filters */}
        <div
          className={`border border-gray-300 pl-5 my-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/*SubCategory */}
        <div
          className={`border border-gray-300 pl-5  my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              TopWhere Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottonwear Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear Kids
            </p>
          </div>
        </div>
      </div>
      {/*Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/*Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevent">Sort by:Relevent</option>
            <option value="low-high">Sort by: Low to High</option>

            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts?.map((item, index) => (
            <ProductIItem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
