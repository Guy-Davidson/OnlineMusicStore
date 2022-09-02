import axios from "axios";
import { useQuery } from "react-query";
import { API_ROOT_PATH } from "../../App/MainAPI";

export const GetGuidesQuery = (page) => {
  return useQuery(
    ["Guides", page],
    () =>
      axios
        .post(`${API_ROOT_PATH}/guides`, { page: page })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      staleTime: 4000,
      cacheTime: 5000,
      enabled: Boolean(page),
      retry: 3,
    }
  );
};

export const GetGuideThumbnail = (fileName) => {
  return useQuery(
    ["GetGuideThumbnail" + fileName],
    () =>
      axios.get(`${API_ROOT_PATH}/guides/${fileName}`).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      staleTime: 4000,
      cacheTime: 5000,
      retry: 3,
    }
  );
};
