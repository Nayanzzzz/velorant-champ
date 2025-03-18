import { Urls } from "../network/api-end-points";
import { DELETE_API } from "../network/api-service";

export const delete_product_by_id = async (id:number | string)=>{
    const res = await DELETE_API({
        endUrl : Urls.deleteProduct(id),
        params :{}
    });
    return res
}