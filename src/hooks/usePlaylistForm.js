// usePlaylistForm.js
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { baseUrl, options } from "../constants";

const usePlaylistForm = (playlistId, onClose, refresh) => {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const songs = useSelector((store) => store.songs?.availableSongs);

  const handleSelect = (song) => {
    setSelectedSongs((prevSelected) => {
      const isSelected = prevSelected.includes(song);
      return isSelected
        ? prevSelected.filter((item) => item !== song)
        : [...prevSelected, song];
    });
  };

  const fetchData = async () => {
    const songIds = selectedSongs.map((song) => song._id);
    if (songIds.length === 0) {
      toast.error("Select at least one song");
      return;
    }
    return await axios.post(
      `${baseUrl}/playlist/addsongs`,
      { playlistId, songs: songIds },
      options()
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetchData();
      if (res?.data) {
        toast.success("Successfully added songs to playlist");
        refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    onClose();
  };

  return { selectedSongs, handleSelect, handleSubmit, songs };
};

export default usePlaylistForm;
