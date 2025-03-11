import axios, { isAxiosError } from "axios";
import { Urls } from "./api-end-points";

interface IBaseModel<T> {
  r: T | null;
  s: number; // 1 - success , 0 - failed
  m: string;
}

const API = axios.create({ baseURL: Urls.baseUrl });

export const POST_API = async <T>({
  endUrl,
  postData,
}: {
  endUrl: string;
  postData: any;
}): Promise<IBaseModel<T>> => {
  try {
    const { data: res, status } = await API.post(endUrl, postData);

    if (status >= 200 && status <= 299) {
      return { s: 1, m: "Success", r: res };
    } else {
      return { r: null, s: 0, m: "Oops someting went wrong" };
    }
  } catch (e) {
    console.log(`API error => `, e);

    if (isAxiosError(e)) {
      const { response } = e;

      console.log("Error response from axios", response?.data);
      return { r: null, s: 0, m: response?.data ?? "Oops someting went wrong" };
    }

    return { r: null, s: 0, m: "Oops someting went wrong" };
  }
};

export const GET_API = async <T>({
  endUrl,
  postData,
  params,
}: {
  endUrl: string;
  postData: any;
  params: any;
}): Promise<IBaseModel<T>> => {
  try {
    const { data: res, status } = await API.get(endUrl, {
      data: postData,
      params: params,
    });

    if (status >= 200 && status <= 299) {
      return { m: "Success", s: 1, r: res };
    } else {
      return { m: "Opps someting went wrong", s: 0, r: null };
    }
  } catch (e) {
    console.log(`API error => `, e);

    if (isAxiosError(e)) {
      const { response } = e;

      console.log("Error response from axios", response?.data);
      return { s: 0, m: response?.data, r: null };
    }

    return { s: 0, m: "Opps someting went wrong", r: null };
  }
};
