import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between bg-indigo-600 text-white p-4 text-xl shadow fixed w-full gap-5">
      <div className="flex pl-8 gap-5">
        <Link to={"/"}>
          <div className="cursor-pointer">Home</div>
        </Link>
        <Link to={"/playlists"}>
          <div className="cursor-pointer">Playlists</div>
        </Link>
      </div>
      <Link to={"/login"}>
        <button
          className="pr-8 cursor-pointer"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Header;
