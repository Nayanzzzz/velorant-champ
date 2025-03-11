import { Urls } from "../api-end-points";
import { POST_API } from "../api-service";

export const api_user_login = async (data: any) => {
  const res = await POST_API<{ token: string } | string>({
    endUrl: Urls.login,
    postData: data,
  });

  return res;
};
