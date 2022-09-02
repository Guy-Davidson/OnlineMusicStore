import axios from "axios";
import { useQuery } from "react-query";
import { API_ROOT_PATH } from "../../App/MainAPI";

export const GetNoteQuery = async (fileName) => {
  let res = await axios.get(`${API_ROOT_PATH}/tuner/${fileName}`);
  return res;
};
