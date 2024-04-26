import Header from "../../Shared/Header/Header";
import LeftSideNavbar from "../../Shared/LeftSideNavbar/LeftSideNavbar";
import Navber from "../../Shared/Navber/Navber";
import RightSideNavber from "../../Shared/RightSideNavber/RightSideNavber";

const Home = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <Header></Header>
      <Navber></Navber>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-5">
        <div className="border-2">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className=" md:col-span-2 border-2">
          <h2>News Comming soon..........</h2>
        </div>
        <div className="border-2">
          <RightSideNavber></RightSideNavber>
        </div>
      </div>
    </div>
  );
};

export default Home;
