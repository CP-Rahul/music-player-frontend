import { Link } from "react-router-dom";

const Playlist = ({ title, songs }) => {
  return (
    <Link to={`/playlists/${title}`}>
      <div className="min-w-64 p-8 bg-gradient-to-r from-teal-400 to-blue-500 text-slate-200 overflow-x-hidden text-3xl text-center font-medium rounded-3xl m-5">
        {title}
      </div>
    </Link>
  );
};

export default Playlist;
