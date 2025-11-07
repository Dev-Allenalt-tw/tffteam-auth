import { FaUser, FaLock, FaFacebook, FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

export default function Login({ switchToRegister }) {
  return (
    <div className="flex w-full h-full text-gray-800">
      {/* Left - Pink Welcome */}
      <div className="w-1/2 bg-[#ff0099] text-white flex flex-col justify-center items-center rounded-r-[100px] px-8">
        <h1 className="text-3xl font-extrabold mb-2">Hello, Welcome!</h1>
        <p className="mb-4 text-lg">Don’t have an account?</p>
        <button
          onClick={switchToRegister}
          className="border-2 border-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-[#ff0099] transition-all duration-300"
        >
          Register
        </button>
      </div>

      {/* Right - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <h1 className="text-3xl font-extrabold mb-6">Login</h1>
        <div className="flex flex-col space-y-4 w-full max-w-[300px]">
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
            <FaUser className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent w-full outline-none"
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
            <FaLock className="text-gray-600 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent w-full outline-none"
            />
          </div>
          <p className="text-sm text-right text-gray-600 cursor-pointer hover:text-[#ff0099]">
            Forgot password?
          </p>
          <button className="bg-[#ff0099] text-white py-2 rounded-lg font-bold hover:bg-[#e60084] transition-all duration-300">
            Login
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600">Or login with social platforms</p>
        <div className="flex space-x-4 mt-3">
          {[FaFacebook, FaGithub, FaGoogle, FaDiscord].map((Icon, i) => (
            <div
              key={i}
              className="bg-black p-3 rounded-md cursor-pointer hover:scale-110 transition-all duration-200"
            >
              <Icon className="text-white text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
