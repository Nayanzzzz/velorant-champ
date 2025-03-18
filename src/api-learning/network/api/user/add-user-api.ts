import { Urls } from "../../api-end-points";
import { POST_API } from "../../api-service";

interface IAddUser {
    username:string ,
    email : string ,
    password : string
}

export const add_user = async(data :IAddUser)=>{
    try {
        const res = await POST_API<{token:string } | string>({
            endUrl:Urls.addNewUser,
            postData:data
        });
        return res

    } catch (error) {
        console.log(error)
        return  null
    }
    
}