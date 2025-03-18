import { delete_product_by_id } from "./product-delete"




const ProductLearning = () => {

    const product =async()=>{
        const result = await delete_product_by_id("5")
        console.log(result)
    }
    const handleAllProduct =()=>{
        console.log("i am click ")
        product()
    }   

  return (
    <div className="mt-15 flex items-center justify-center">
     <button className="pl-10 pr-10 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleAllProduct}>
        Delete Product
     </button>
    </div>
  )
}

export default ProductLearning
