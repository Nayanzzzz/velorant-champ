import { IProductModel } from "../../model/product-model"
import { Urls } from "../api-end-points"
import { GET_API } from "../api-service"

export const api_product_get_details_by_id = async(id:number | string | undefined)=>{

    const res = await GET_API<IProductModel>({
        endUrl : Urls.getProductDetails(id),
        postData :{},
        params : {}
    });

    return res;

}
