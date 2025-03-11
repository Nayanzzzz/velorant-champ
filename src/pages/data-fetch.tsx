

import { useNavigate} from "react-router-dom";
import  { useProductContext } from "../context/product-context/product-context";



const DataFetchApi = () => {

    const data = useProductContext()
    const navigation = useNavigate()


    
    
  
  return (
    <div className="  grid grid-cols-4 gap-10  font-bold text-2xl  mt-20">
      
      
      {data.map((p)=>{
          const handleClick =()=>{
            console.log("click")
            navigation(`${p.id}`)
          }
        return (
          <>
          
          <h1  className="bg-gray-300 rounded-lg flex items-center justify-center pt-2 pb-2 w-[250px] cursor-pointer" role="button"
          onClick={handleClick}>{p.name} </h1>
          
          </>
        )
      })}
      
      
      
    </div>
  )
}

export default DataFetchApi;
