import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const navigation = useNavigate();

    

    const selectedProduct = useSelector((state:RootState)=>state.selectedProduct)

    const dataId = selectedProduct.map((p)=>{
        return p.id
    })
    console.log(dataId)

    const handlePrice = ()=>{
        navigation("/payment" )
    }

    const handleApiCalling=()=>{
      navigation("/new-form")
      
    }

  return (
    <div className="flex gap-3 items-center">
      <p className="font-bold">Total item in Cart : {selectedProduct.reduce((p,c)=>c.qty+p,0)}</p>

      <button className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer" onClick={handlePrice}>Buy</button>

      <button  className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer" onClick={handleApiCalling}>React Hook Form</button>
    </div>
  )
}

export default Navbar
