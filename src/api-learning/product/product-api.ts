import { IProductModel } from "../../model/product-model"
import { Urls } from "../network/api-end-points";
import {  GET_API } from "../network/api-service"

export const get_all_product = async()=>{
const res = await GET_API<IProductModel>({
        endUrl : Urls.getAllProductList,
        postData :{},
        params : {}
    });
    return res
}

