import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductData, { IProductData } from "../../data/product-data";

interface ISelectedProduct extends IProductData{
  qty:number
}

const selectedProduct: ISelectedProduct[] = [];

 const productSlice = createSlice({
  name: "product",
  initialState: selectedProduct,
  reducers: {
    addToCart: (state, action) => {
      state.push({...action.payload,qty:1});
    },
    
    removeFromCart: (state, action) => {
      const index = state.findIndex((v) => v.id == action.payload);
      state.splice(index, 1);
    },


    //update start here
    updateProductQty:(state , action:PayloadAction<{type : "inc" | "dec", id : number | undefined}>)=>{
      const {type , id} = action.payload;

      const checkProductExist = state.find((v)=>v.id == id);

      if(!checkProductExist){
         
        const p = ProductData.find((v)=>v.id == id)

        if(p){
          state.push({...p! , qty:1});
          return state;
        }

      }

      return  state.map((v)=>{
        if(v.id != id){
          return v
        }
        if(type == "inc"){
          return {...v , qty: v.qty + 1}
        }
        return {...v , qty: v.qty -1}
      }) 

    }
    //update complate here

  },
});

export const {addToCart , removeFromCart ,updateProductQty} = productSlice.actions;

export const productReducer = productSlice.reducer;