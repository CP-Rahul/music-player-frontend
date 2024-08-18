import axios from "axios";
import { useEffect } from "react";
import { baseUrl, options} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addPausedSongs } from "../redux/songSlice";

const usePausedSong = () => {
  const dispatch = useDispatch();
  const activeSong = useSelector((store) => store.songs.activeSong);

  const getPausedSong = async () => {
    try {
      const songs = await axios.get(`${baseUrl}/playback`, options());
      dispatch(addPausedSongs(songs?.data?.data));
    } catch (error) {}
  };
  useEffect(() => {
    getPausedSong();
  }, [activeSong]);
};

export default usePausedSong;
