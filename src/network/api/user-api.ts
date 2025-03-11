import { IUserModel } from "../../model/user-model";
import { Urls } from "../api-end-points";
import { GET_API } from "../api-service";

export const api_user_get_details_by_id = async (id: string) => {
  const res = await GET_API<IUserModel>({
    endUrl: Urls.getUserDetails(id),
    postData: {},
    params: {},
  });

  return res;
};
