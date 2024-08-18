import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import PlaylistContainer from "./PlaylistContainer";
import PlaylistDetails from "./PlaylistDetails";
import Layout from "./Layout";
import SongContainer from "./SongContainer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute element={<SongContainer />} />,
        },
        {
          path: "/playlists",
          element: <ProtectedRoute element={<PlaylistContainer />} />,
        },
        {
          path: "/playlists/:name",
          element: <ProtectedRoute element={<PlaylistDetails />} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  );
};

export default Body;
