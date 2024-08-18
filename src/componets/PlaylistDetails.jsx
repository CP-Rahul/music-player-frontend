import { useParams } from "react-router-dom";
import SongCard from "./SongCard";
import { useSelector, useDispatch } from "react-redux";
import PlayListForm from "./PlaylistForm";
import { useState } from "react";
import useCurrentPlaylist from "../hooks/useCurrentPlaylist";

const PlaylistDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { songs, playlistId } = useCurrentPlaylist(isAdded);

  const activeSong = useSelector((store) => store.songs.activeSong);
  const isPlaying = useSelector((store) => store.songs.isPlaying);

  const handleButtonClick = () => {
    setShowForm((prev) => !prev);
  };

  const refresh = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <div className="mt-14">
      {showForm && (
        <PlayListForm
          onClose={handleButtonClick}
          playlistId={playlistId}
          refresh={refresh}
        />
      )}
      <button
        onClick={handleButtonClick}
        type="button"
        className="text-6xl cursor-pointer fixed"
      >
        {showForm ? "" : "+"}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-14 justify-items-center mb-5">
        {songs?.map((song, i) => (
          <SongCard
            key={song.title}
            title={song.title}
            subtitle={song.subtitle}
            image={song.image}
            song={song}
            i={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetails;
