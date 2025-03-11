import { useNavigate } from "react-router-dom";
import { IProductData } from "../data/product-data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/reducer/product-reducer";


const Card = (item: IProductData & { index: number }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    // navigation("/product" , {state :{name , img_url , price , category}});
    navigation("/product", { state: { id: item.id } });
  };

  return (
    <div className="  h-[400px] rounded-md" key={item.index}>
      <div className="w-[90%] mx-auto  h-[250px] mt-3 rounded-lg border-2 border-black ">
        <img
          src={item.img_url}
          alt={item.category}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* price , name , button for product details  */}
      <div className="flex flex-col items-center justify-center gap-1 mt-2">
        <h1 className="font-bold">Name : {item.name}</h1>
        <h2 className="font-bold">Price : {item.price}</h2>
        <p className="font-bold">Category : {item.category}</p>
        <div className="flex gap-2">
        <button
          className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          Product Details
        </button>
        <AddRemoveCartButton item={item}/>
        
        </div>

      </div>
    </div>
  );
};

export default Card;


export  function AddRemoveCartButton ({item} : {item : IProductData}){
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: RootState) => state.selectedProduct
  );


  const checkIfIsAddToCart = selectedProduct.findIndex((v) => v.id == item.id);

  if (checkIfIsAddToCart == -1) {
    return (
      <button
        onClick={() => dispatch(addToCart(item))}
        className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer"
      >
        Add To Cart
      </button>
    );
  } 

  else {
    return <button
      onClick={() => dispatch(removeFromCart(item.id))}
      className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer"
    >
      Remove From Cart
    </button>;
  }
  
}
