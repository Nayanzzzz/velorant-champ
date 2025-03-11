import axios, { isAxiosError } from "axios";
import { Urls } from "./api-end-points";

const API = axios.create({ baseURL: Urls.baseUrl });

export const POST_API = async ({
  endUrl,
  postData,
}: {
  endUrl: string;
  postData: any;
}) => {
  try {
    const { data:res, status } = await API.post(endUrl,postData);

    if (status >= 200 && status <= 299) {
      return res;
    } else {
      return null;
    }
  } catch (e) {
    console.log(`API error => `, e);

    if (isAxiosError(e)) {
      const { response } = e;

      console.log("Error response from axios", response?.data);
      return null;
    }

    return null;
  }
};
