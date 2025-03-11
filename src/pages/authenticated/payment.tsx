import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Billing from "../../redux/services/billing";
import Card from "../../components/card-for-product";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { removeFromCart } from "../../redux/reducer/product-reducer";

const Payment = () => {
  
  const getItem = useSelector((state:RootState)=>state.selectedProduct);
  console.log(getItem);
  // const navigation = useNavigate();

  const buyProduct = useSelector((state:RootState)=>state.selectedProduct);
  console.log(buyProduct);  



  return (
    <>
      <div className="flex items-center justify-center font-bold mt-20 gap-3">
        <p className="text-2xl text-violet-900">Your Total Billing is : </p>
        <Billing />
      </div>

      <div className=" mx-auto w-[80%] grid grid-cols-3  place-content-evenly gap-2 mt-15">
        {getItem.map((p, index) => {
          return <Card key={index} {...p} index={index} />;
        })}
      </div>

      <div className="mt-15 flex items-center justify-center">

        <PayButtonOrNot/>
        
      </div>
    </>
  );
};

export default Payment;



function PayButtonOrNot (){
  const buyProduct = useSelector((state : RootState)=>state.selectedProduct)
  const navigation = useNavigate();

  const dispatch = useDispatch();
  
  const notify = () =>
      toast.info("Processing Payment", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });


        const successNotify = () =>
          toast.success(
             "Your Payment is Done 🥂✨",{autoClose: 1000}
          );

        const noProduct=()=>{
          toast.info("You Have No Product In Your Cart. So u are Redirect to Home Page in 3 seconds", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            })
        }

  const handlePayButton = () =>{
    notify();
    setTimeout(()=>{
      { buyProduct.map((p)=>{
        dispatch(removeFromCart(p.id))
      })}
      successNotify()
      navigation("/home")
    },2000)
  }

  const noProductFunc = ()=>{
      noProduct();
      setTimeout(()=>{
        navigation("/home")
      },3000)
  }

  if(buyProduct.length != 0){
    return (
      <button className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer bg-blue-700 text-white"
        onClick={handlePayButton}>Pay Now</button>
      )
    
  }else{
    return (
      <button className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer bg-blue-700 text-white"
      onClick={noProductFunc}>No Product</button> 
    )
  }
}
