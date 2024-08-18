import usePlayList from "../hooks/usePlayList";
import Playlist from "./Playlist";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddPlaylist from "./AddPlaylist";

const PlaylistContainer = () => {
  const playlists = useSelector((store) => store.songs.playlists);
  const [isAdded, setIsAdded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm((prev) => !prev);
  };

  const refresh = () => {
    setIsAdded((prev) => !prev); 
  };

  usePlayList(isAdded); 

  return (
    <div className="mt-14">
      {showForm && (
        <AddPlaylist onClose={handleButtonClick} refresh={refresh} />
      )}
      <button
        onClick={handleButtonClick}
        type="button"
        className="text-6xl cursor-pointer fixed"
      >
        {showForm ? "" : "+"}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-14 mb-5 gap-5">
        {playlists?.map((playlist) => (
          <Playlist
            key={playlist._id}
            title={playlist.title}
            songs={playlist.songs}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistContainer;
