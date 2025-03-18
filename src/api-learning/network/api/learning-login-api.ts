import { Urls } from "../api-end-points";
import { POST_API } from "../api-service"

export const api_user_login_learning = async(data : any)=>{
    const res = await POST_API<{token:string } | string>({
        endUrl:Urls.learninglogin,
        postData:data
    });
    return res
}

