import axios, { isAxiosError } from "axios";
import { Urls } from "./api-end-points";

interface IBaseModel <T>{
    r:T|null;
    s:number; //1-success 0-fail
    m:string;
}

const API = axios.create({baseURL : Urls.baseUrl});

export const POST_API = async<T>({endUrl , postData} : {endUrl : string , postData : any}):Promise<IBaseModel <T>>=>{
    try {
        const {data : res,status} = await API.post(endUrl , postData)
        
        if(status >= 200 && status<=299){
            return {s:1 , m:"Success" , r:res}
        }else{
            return {m:"oops something went wrong" , s:0 , r:null}
        }


    } catch (error) {
        console.log("API error is ->", error);

        if(isAxiosError(error)){
            const {response} = error;

            console.log("response from axios is " , response?.data);
            return { r: null, s: 0, m: response?.data ?? "Oops someting went wrong" };
        }
        return { r: null, s: 0, m: "Oops someting went wrong" };
    }
}


export const GET_API = async<T>({endUrl , postData , params} : {endUrl : string , postData : any , params : any}):Promise<IBaseModel <T>>=>{
    try {
        const {data : res,status} = await API.get(endUrl , {data : postData ,
            params : params
        })
        
        if(status >= 200 && status<=299){
            return {s:1 , m:"Success" , r:res}
        }else{
            return {m:"oops something went wrong" , s:0 , r:null}
        }

    } catch (error) {
        console.log("API error is ->", error);

        if(isAxiosError(error)){
            const {response} = error;

            console.log("response from axios is " , response?.data);
            return { r: null, s: 0, m: response?.data ?? "Oops someting went wrong" };
        }
        return { r: null, s: 0, m: "Oops someting went wrong" };
    }
}



export const DELETE_API = async<T>({endUrl , params} : {endUrl : string , params : any}):Promise<IBaseModel <T>>=>{
    try {
        const {data : res,status} = await API.delete(endUrl ,{params})
        if(status >= 200 && status<=299){
            return {s:1 , m:"Delete Successfully" , r:res}
        }else{
            return {m:"oops something went wrong" , s:0 , r:null}
        }

    } catch (error) {
        console.log("API error is ->", error);

        if(isAxiosError(error)){
            const {response} = error;

            console.log("response from axios is " , response?.data);
            return { r: null, s: 0, m: response?.data ?? "Oops someting went wrong" };
        }
        return { r: null, s: 0, m: "Oops someting went wrong" };
    }
}

