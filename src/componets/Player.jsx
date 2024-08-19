import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setPlayback } from "../redux/songSlice";
import axios from "axios";
import { baseUrl, options} from "../constants";

const Player = ({ activeSong, isPlaying }) => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const playback = useSelector((store) => store.songs.playback);
  const pausedSongs = useSelector((store) => store.songs.pausedSongs);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        if (pausedSongs?.length !== 0) {
          const position = pausedSongs?.find(
            (song) => song?.songId === activeSong?.song?._id
          );
          if (position) {
            audioElement.currentTime = position.position;
          }
        } else {
          audioElement.currentTime = 0;
        }
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [activeSong, isPlaying, pausedSongs]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      if (audioElement) {
        dispatch(
          setPlayback({
            songId: activeSong.song._id,
            position: audioElement.currentTime,
          })
        );
      }
    };

    const handleEnded = () => {
      if (audioElement) {
        dispatch(playPause(false));
        axios.delete(
          `${baseUrl}/playback`,
          {
            data: {
              songId: activeSong?.song?._id,
            },
            ...options
          }
        );
      }
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [activeSong, dispatch]);

  const handlePause = () => {
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
      dispatch(playPause(true));
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };



  return (
    <div className="w-full bg-slate-100 fixed bottom-0 text-center flex justify-center gap-5">
      <div className="w-20 h-20 p-2 rounded-full">
        <img src={activeSong?.song?.image} className="rounded-full" />
      </div>
      <audio ref={audioRef} src={activeSong?.song?.audio}></audio>
      <div className="flex justify-items-center py-4 gap-4">
        <span className="mt-3">{formatTime(playback?.position)}</span>
        <button
          className="bg-cyan-400 px-8 py-4 rounded-full text-white font-medium"
          onClick={handlePause}
        >
          {isPlaying && playback.position !== activeSong?.song.duration
            ? "Pause"
            : "Play"}
        </button>
        <span className="mt-3">{formatTime(activeSong?.song?.duration)}</span>
      </div>
    </div>
  );
};

export default Player;
