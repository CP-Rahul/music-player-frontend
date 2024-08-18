import axios from "axios";
import { useEffect } from "react";
import { baseUrl, options } from "../constants";
import { useDispatch } from "react-redux";
import { addAvailableSongs } from "../redux/songSlice";
import toast from "react-hot-toast";

const useSongs = () => {
  const dispatch = useDispatch();

  const getAllSongs = async () => {
    try {
      const songs = await axios.get(`${baseUrl}/song`, options());
      dispatch(addAvailableSongs(songs?.data?.data));
    } catch (error) {
      if (error?.response?.data?.error?.explanation === "Missing JWT token") {
        toast.error("Something went wrong");
      }
    }
  };
  useEffect(() => {
    getAllSongs();
  }, []);
};

export default useSongs;
