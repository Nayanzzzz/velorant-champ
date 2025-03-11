import { useMemo } from "react";
import ProductData, { IProductData } from "../data/product-data";

import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateProductQty } from "../redux/reducer/product-reducer";

const CardForOneProduct = (item: IProductData & { index: number }) => {
  const product = useSelector((state: RootState) => state.selectedProduct);
  // console.log(product)
  const dispatch = useDispatch();

  const productDetails = useMemo(() => {
    const p = ProductData.find((v) => v.id === item.id);
    const sp = product.find((v) => v.id === item.id);

    // console.log(p)
    console.log(sp);

    if (sp) {
      return { ...p, qty: sp?.qty };
    }
    return { ...p, qty: 0 };

    // return {...p, qty:sp ? sp?.qty : 0}
  }, [item.id, product]);

  console.log("qty", productDetails.qty);

  //increment and decrement
  function decrement() {
    dispatch(updateProductQty({ id: item.id, type: "dec" }));
  }

  function increment() {
    dispatch(updateProductQty({ id: item.id, type: "inc" }));
  }

  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className=" w-[250px] h-[400px] rounded-md" key={item.index}>
        <div className="w-[90%] mx-auto  h-[250px] mt-3 rounded-lg border-2 border-black ">
          <img
            src={item.img_url}
            alt={item.category}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* price , name , button for product details  */}
        <div className="flex flex-col items-center justify-center gap-2 mt-2">
          <h1 className="font-bold">Name : {item.name}</h1>
          <h2 className="font-bold">Price : {item.price}</h2>
          <p className="font-bold">Category :{item.category}</p>
          <div>
            <div className="flex gap-5 items-center justify-center font-bold text-2xl mt-5">
              <button
                disabled={(productDetails?.qty ?? 0) == 0}
                className={`border-2 border-black  pl-2 pr-2 cursor-pointer ${
                  (productDetails?.qty ?? 0) == 0 ? "opacity-30" : ""
                }`}
                onClick={decrement}
              >
                -
              </button>

              <p>{productDetails?.qty}</p>
              {/* <p>{isNaN(productDetails?.qty) ? 0 : productDetails?.qty}</p> */}

              <button
                className="border-2 border-black  pl-2 pr-2 cursor-pointer"
                onClick={increment}
              >
                +
              </button>
            </div>

            <p className="mt-5 font-bold">Add or Remove From Cart</p>
            {/* <div>
        <AddRemoveCartButton item={item}/>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForOneProduct;
