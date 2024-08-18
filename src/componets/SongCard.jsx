import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/songSlice";
import axios from "axios";
import { baseUrl, options } from "../constants";

const SongCard = ({
  image,
  title,
  subtitle,
  activeSong,
  isPlaying,
  song,
  i,
}) => {
  const dispatch = useDispatch();
  const playback = useSelector((store) => store.songs.playback);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
      axios.post(
        `${baseUrl}/playback`,
        {
          position: playback.position,
          songId: playback.songId,
        },
        options()
      );
    } else {
      dispatch(setActiveSong({ song, i }));
      dispatch(playPause(true));
    }
  };

  return (
    <div className="w-80 sm:w-60 md:w-56 p-3 cursor-pointer shadow-md flex flex-col items-stretch m-2" onClick={handlePlayPause}>
      <img src={image} alt="song" className="rounded" />
      <div className="flex flex-col items-stretch mb-1">
        <p className="py-1 text-lg font-bold">{title}</p>
        <p className="">{subtitle}</p>
        {/* <button onClick={handlePause}>
          {isPlaying && song?.title === activeSong?.song?.title
            ? "Pause"
            : "Play"}
        </button> */}
      </div>
    </div>
  );
};

export default SongCard;
