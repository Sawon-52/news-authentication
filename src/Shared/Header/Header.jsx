import logo from "../../../src/assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-5">
      <img src={logo} alt="site logo" />
      <h3 className="text-xl text-center">Journalism Without Fear or Favour</h3>
      <h3 className="font-bold text-xl text-gray-500 text-center">{moment().format("LLLL")}</h3>
    </div>
  );
};

export default Header;
