import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  console.log(categorys);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 ">All Caterogy</h2>
      <div className="flex flex-col gap-4 space-y-2  p-5 text-xl font-semibold  text-gray-500 ">
        {categorys.map((category) => (
          <NavLink className={({ isActive }) => (isActive ? "text-gray-50 bg-gray-500" : " text-gray-500")} key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNavbar;
