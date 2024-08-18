import { setPlalists } from "../redux/songSlice";
import axios from "axios";
import { baseUrl, options} from "../constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePlayList = (isAdded) => {
  const dispatch = useDispatch();
  const getPlaylists = async () => {
    try {
      const playlists = await axios.get(`${baseUrl}/playlist`, options());
      dispatch(setPlalists(playlists?.data?.data));
    } catch (error) {}
  };
  useEffect(() => {
    getPlaylists();
  }, [isAdded]);
};

export default usePlayList;
