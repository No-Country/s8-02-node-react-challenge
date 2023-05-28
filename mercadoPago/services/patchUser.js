import { baseUrl } from "../axios/axiosInstance";

export const patchUser = async (id, data, token) => {
  return baseUrl
    .patch(`/auth/user/${id}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data)
    .catch((err) => err);
};
