import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className=" font-poppins p-2">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
