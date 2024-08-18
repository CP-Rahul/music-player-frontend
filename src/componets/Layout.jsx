import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import Player from "./Player";
import useSongs from "../hooks/useSongs";
import usePausedSong from "../hooks/usePausedSong";


const Layout = () => {
  const activeSong = useSelector((store) => store.songs.activeSong);
  const isPlaying = useSelector((store) => store.songs.isPlaying);

  return (
    <div>
      <Header />
      <main className="p-4">
        <Outlet />
        {activeSong && <Player activeSong={activeSong} isPlaying={isPlaying} />}
      </main>
    </div>
  );
};

export default Layout;
