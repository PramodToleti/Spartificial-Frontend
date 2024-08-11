import { useNavigate } from "react-router-dom";

import LoginImage from "../assets/login-image.png";
import GoogleIcon from "../assets/google-logo.png";
import InputField from "../components/InputField";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full md:h-[480px] flex justify-between border rounded-xl shadow-lg p-2 bg-white md:w-[55%]">
        <div className="h-full w-full md:w-[48%] p-4 pt-8">
          <h1 className="text-3xl text-center mb-4 font-bold">Login</h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Login to your account to continue
          </p>

          <form className="flex flex-col" onSubmit={(e) => handleLogin(e)}>
            <InputField
              label="Email"
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold p-2 rounded-md transition duration-300"
            >
              Login
            </button>
            <p className="text-center mt-4 text-sm text-gray-500 mb-4">or</p>
            <button
              type="submit"
              className="w-full border-2 border-gray-200 rounded-lg text-black p-2 font-semibold flex justify-center items-center gap-2"
              onClick={(e) => handleLogin(e)}
            >
              <img
                src={GoogleIcon}
                alt="Google"
                className="h-[18px] inline mr-2"
              />
              Sign in with Google
            </button>
          </form>
        </div>
        <div className="hidden md:flex md:w-[50%] rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center justify-center">
          <img
            src={LoginImage}
            alt="Login"
            className="h-[350px] mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
