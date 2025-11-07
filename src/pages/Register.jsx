import { FaUser, FaEnvelope, FaLock, FaFacebook, FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

export default function Register({ switchToLogin }) {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Registeration</h1>
        <div className="flex flex-col space-y-4 w-3/4">
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
            <FaUser className="text-gray-600 mr-2" />
            <input type="text" placeholder="Username" className="bg-transparent w-full outline-none" />
          </div>
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-600 mr-2" />
            <input type="email" placeholder="Email" className="bg-transparent w-full outline-none" />
          </div>
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2">
            <FaLock className="text-gray-600 mr-2" />
            <input type="password" placeholder="Password" className="bg-transparent w-full outline-none" />
          </div>
          <button className="bg-[#ff0099] text-white py-2 rounded-lg font-bold">Register</button>
        </div>

        <p className="mt-6 text-sm text-gray-600">Or register with social platforms</p>
        <div className="flex space-x-4 mt-3">
          {[FaFacebook, FaGithub, FaGoogle, FaDiscord].map((Icon, i) => (
            <div key={i} className="bg-black p-3 rounded-md cursor-pointer">
              <Icon className="text-white text-xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 bg-[#ff0099] text-white flex flex-col justify-center items-center rounded-l-[100px]">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="mb-4">Already have an account?</p>
        <button
          onClick={switchToLogin}
          className="border-2 border-white px-6 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-[#ff0099] transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}
