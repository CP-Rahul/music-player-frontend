import Loader from "./Loader";
import SongCard from "./SongCard";
import { useSelector } from "react-redux";
import useSongs from "../hooks/useSongs";
import usePausedSong from "../hooks/usePausedSong";

const SongContainer = () => {
  const availableSongs = useSelector((store) => store.songs.availableSongs);
  const activeSong = useSelector((store) => store.songs.activeSong);
  const isPlaying = useSelector((store) => store.songs.isPlaying);

  useSongs();
  usePausedSong();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center p-14 mb-20 mx-auto">
      {availableSongs?.map((song, i) => (
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
  );
};

export default SongContainer;
