import axios from "axios";
import { useQuery } from "react-query";
import { API_ROOT_PATH } from "../../App/MainAPI";

export const GetAllChordsQuery = (page) => {
  return useQuery(
    ["Chords", page],
    () =>
      axios.get(`${API_ROOT_PATH}/chords/page=${page}`).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      staleTime: 4000,
      cacheTime: 5000,
      retry: 3,
    }
  );
};

export const GetSingleChordsQuery = (fileName) => {
  return useQuery(
    ["SingleSongChords"],
    () =>
      axios.get(`${API_ROOT_PATH}/chords/${fileName}`).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      staleTime: 4000,
      cacheTime: 5000,
      retry: 3,
    }
  );
};
