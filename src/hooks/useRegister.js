import { useRef } from "react";
import { validateInputs } from "../utils/validateInputs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { baseUrl } from "../constants";
import axios from "axios";

const useRegister = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const registerHandler = (e) => {
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
      const res = await axios.post(`${baseUrl}/user/register`, {
        email: email,
        password: password,
      });
      toast.success("Account created, Please login");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.error?.explanation || "Something went wrong please try again");
    }
  };
  return { email, password, registerHandler };
};

export default useRegister;
