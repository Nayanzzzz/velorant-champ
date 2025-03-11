import { useSelector } from "react-redux"
import { RootState } from "../store"

const Billing = () => {
    const getItem = useSelector((state: RootState) => state.selectedProduct)
  return (
    <div className="text-2xl text-emerald-600">
        {getItem.map((p)=>{
        return (
          p.price
        )
      }).reduce((a, b) => a+b ,0 )} 
      
    </div>
  )
}

export default Billing
