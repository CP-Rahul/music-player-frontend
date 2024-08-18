import { useRef } from "react";
import { validateInputs } from "../utils/validateInputs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { baseUrl } from "../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";

const useLogin = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    const validate = validateInputs(
      email.current.value,
      password.current.value
    );
    if (validate) {
      toast.error(validate);
    } else {
      createAccount(email.current.value, password.current.value);
    }
  };

  const createAccount = async (email, password) => {
    try {
      let token = await axios.post(`${baseUrl}/user/login`, {
        email: email,
        password: password,
      });
      token = token?.data?.data;
      toast.success("Login successful!");
      dispatch(login(token));
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.error?.explanation || "Something went wrong please try again");
    }
  };
  return { email, password, loginHandler };
};

export default useLogin;
