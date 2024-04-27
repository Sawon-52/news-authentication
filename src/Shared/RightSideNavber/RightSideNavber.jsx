import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import photoQ1 from "../../assets/qZone1.png";
import photoQ2 from "../../assets/qZone2.png";
import photoQ3 from "../../assets/qZone3.png";
const RightSideNavber = () => {
  return (
    <div>
      <div className=" space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Login With</h2>
        <button className=" w-full flex items-center gap-4 border-2 border-indigo-800 p-2 text-indigo-800 text-xl rounded-xl">
          <FaGoogle />
          Login with Google
        </button>

        <button className="w-full flex items-center gap-4 p-2 border-2 border-gray-800 text-gray-800 text-xl rounded-xl">
          <FaGithub /> Login with Github
        </button>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Find Us On</h2>
        <div>
          <a href="#" className="flex items-center gap-3 p-5 border-2 rounded-tl-xl rounded-tr-xl text-xl text-blue-400">
            <FaFacebookF /> Facebook
          </a>
          <a href="#" className="flex items-center gap-3 p-5 border-x-2  text-xl">
            <FaTwitter /> Twitter
          </a>
          <a href="#" className="flex items-center gap-3 p-5 border-2 rounded-bl-xl rounded-br-xl text-xl text-red-600">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-100 p-5 my-5">
        <h2 className="text-2xl font-bold text-gray-900 ">Q-Zone</h2>
        <div className="flex flex-col items-center gap-10">
          <img src={photoQ1} alt="Q-zonePhoto" />
          <img src={photoQ2} alt="Q-zonePhoto" />
          <img src={photoQ3} alt="Q-zonePhoto" />
        </div>
      </div>

      <div className="bg-indigo-900 p-10 flex flex-col items-center text-center space-y-10 ">
        <h1 className="text-3xl text-white font-bold leading-relaxed">Create an Amazing Newspaper</h1>
        <p className="text-xl text-white ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="p-3 px-10 bg-pink-600 text-white font-bold text-xl">Latest</button>
      </div>
    </div>
  );
};

export default RightSideNavber;
