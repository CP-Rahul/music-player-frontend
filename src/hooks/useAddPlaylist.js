// useAddPlaylist.js
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl, options } from "../constants";

const useAddPlaylist = (onClose, refresh) => {
  const title = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.current.value) {
      toast.error("Please give a title");
      return;
    }
    try {
      const response = await axios.post(
        `${baseUrl}/playlist`,
        { title: title.current.value },
        options()
      );
      if (response.data?.data?.title) {
        toast.success("Successfully created the playlist");
        refresh();
        onClose();
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.explanation ===
          "Please give a unique name to playlist"
          ? "Please give a unique name to playlist"
          : "Something went wrong, please try again later!"
      );
    }
  };

  return { title, handleSubmit };
};

export default useAddPlaylist;
