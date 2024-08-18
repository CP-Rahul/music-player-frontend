import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { options, baseUrl } from "../constants";
import { setPlalists } from "../redux/songSlice";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const useCurrentPlaylist = (isAdded) => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);
  const { name } = useParams(); // Assuming 'name' is the playlist name or id

  const updateSongs = (songs) => {
    setSongs(songs);
  };

  const updatePlaylistId = (id) => {
    setPlaylistId(id);
  };

  const getPlaylists = async () => {
    try {
      const playlists = await axios.get(`${baseUrl}/playlist`, options());
      dispatch(setPlalists(playlists?.data?.data));
      const playlistSongs = playlists?.data?.data;
      const currentPlaylist = playlistSongs?.find(
        (playlist) => playlist.title === name
      );
      updatePlaylistId(currentPlaylist?._id);
      updateSongs(currentPlaylist?.songs);
    } catch (error) {
      toast.error("Failed to fetch playlists");
    }
  };

  useEffect(() => {
    getPlaylists();
  }, [isAdded]);

  return { songs, playlistId, name };
};

export default useCurrentPlaylist;
