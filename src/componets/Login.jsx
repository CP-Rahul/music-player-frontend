import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { email, password, loginHandler } = useLogin();

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form
        action="submit"
        onSubmit={loginHandler}
        className="flex flex-col items-center border border-gray-500 p-8 gap-6 rounded-lg"
      >
        <p className="text-2xl font-bold">Login</p>
        <input
          type="email"
          placeholder="Enter your email"
          ref={email}
          className="py-2 pl-1 pr-5 focus:outline-none border border-gray-500"
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
          Login
        </button>
        <Link to={"/register"}>
          <p className="underline">Don't have an account yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
