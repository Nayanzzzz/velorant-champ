import { createContext, ReactNode, useContext } from "react";
import ProductData, { IProductData }  from "../../data/product-data";
 


//create context
 const ProductContext   = createContext<IProductData[]>([])

//make provider 


export const ProductContextProvider = ({children}:{children : ReactNode})=>{

    const data = ProductData ;
    return (
        <ProductContext.Provider value={data} >
            {children}
        </ProductContext.Provider>
    )
}

 export default ProductContext ;


 export const useProductContext = ()=>{

    const cntx = useContext(ProductContext);

    if(!cntx){
        throw new Error('not found');
    }

    return cntx;
 }