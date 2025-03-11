import { useLocation, useNavigate } from "react-router-dom";
// import ProductData from "../data/product-data";
import {  useMemo } from "react";
import  { useProductContext } from "../context/product-context/product-context";
// import ProductCounterContext from "../context/product-context/product-counter-context";

const Product = () => {
  const data = useLocation();
  const navigation = useNavigate();
  const state = data.state;
  console.log("Received id:", state.id);



  const contextData2 = useProductContext()
  
  

  const filterOProductData = useMemo(
    () => contextData2.find((p) => p.id === state.id),
    [state.id , contextData2]
  );

  // console.log(filterOProductData);

  const handleApiData = () => {
    navigation("/data-fetch");
  };

  return (
    <div className=" w-full h-screen flex  items-center text-[#5A2A5B] font-[Popins]">
      <div className=" mx-auto   flex-1/2 w-full h-full flex items-center justify-center">
        <div className="bg-amber-700 w-[500px] h-[500px] rounded-2xl border-4">
          <img
            src={filterOProductData?.img_url ?? "Logo"}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-7 w-full h-full mx-auto items-center pt-30 flex-1/2  pl-10 pr-10 font-bold text-2xl">
        <p>
          <span className="underline ">Description</span> : Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Harum commodi suscipit
          architecto deleniti! Blanditiis sapiente facilis beatae neque quas
          magni aperiam nisi tempora rerum sed quibusdam doloremque, veniam
          itaque similique sit aspernatur doloribus ullam dolore fuga ducimus
          earum dolorem? Neque.
        </p>
        <p>Name : {filterOProductData?.name}</p>
        <p>Price : {filterOProductData?.price}</p>
        <p>Category : {filterOProductData?.category}</p>
        <button
          className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer"
          onClick={handleApiData}
        >
          All Available Product Name
        </button>
      </div>
    </div>
  );
};

export default Product;
