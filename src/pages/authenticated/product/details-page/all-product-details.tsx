
import { useParams } from "react-router-dom"
import { useProductContext } from "../../../../context/product-context/product-context";
import { useMemo } from "react";

import CardForOneProduct from "../../../../components/card-for-one-product";





const AllProductDetails = () => {
  const {pid} = useParams();
  
  const id = parseInt(pid ?? "0")
  

  const data = useProductContext();
  
  const matchProduct =useMemo(()=>{
    return  data.find((p )=>{return p.id === id})
  },[data , id])
  // console.log(matchProduct)

  const index = useMemo(()=>{
    return data.findIndex((p)=> p.id === id)
  },[data , id])
  
  


  return (
    <div className=" mx-auto w-[80%] flex items-center justify-center mt-30">
     {/* {matchProduct ?  (<Card {...matchProduct} index={index}/>) : (
      <p>Product not found</p>
    )} */}
    {matchProduct ?  (<CardForOneProduct {...matchProduct} index={index}/>) : (
      <p>Product not found</p>
    )}
    </div>

  )
}

export default AllProductDetails