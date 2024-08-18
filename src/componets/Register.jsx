import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const { email, password, registerHandler } = useRegister();

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form
        action="submit"
        onSubmit={registerHandler}
        className="flex flex-col items-center border border-gray-500 p-8 gap-6 rounded-lg"
      >
        <p className="text-2xl font-bold">Register</p>
        <input
          type="email"
          placeholder="Enter your email"
          ref={email}
          className="py-2 px-1 pr-5 focus:outline-none border border-gray-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
          className="py-2 px-1 pr-5 focus:outline-none border border-gray-500"
        />
        <button
          type="submit"
          className=" min-w-full bg-green-500 py-2 px-sm focus:outline-none text-white rounded-lg"
        >
          Register
        </button>
        <Link to={"/login"}>
          <p className="underline">Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
