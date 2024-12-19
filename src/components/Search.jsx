import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Search = () => {
    const[visible,setVisible]=useState(false)
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location=useLocation()

  useEffect(()=>{

    if(location.pathname.includes("collection")){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
  },[location])


  return showSearch && visible ?(
    <div className="border-b border-t bg-gray-50 text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 my-5 rounded-full w-3/4  sm:w-1/2">
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-inherit text-sm py-2"
          placeholder="search..."
        />
        <img src={assets.search_icon} alt="searchicone" className="w-4" />
      </div>
      <img onClick={()=>setShowSearch(false)} className="inline w-4 cursor-pointer" src={assets.cross_icon} alt="" />
    </div>
  ) :null
};

export default Search;
