import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
  
const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  return isLoggedIn ? element: <Navigate to="/login" />;
};
export default ProtectedRoute;
