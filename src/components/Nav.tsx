import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full p-4 flex  gap-5 items-center bg-pink-600 ">
      <NavLink to={"home"}>home</NavLink>
      <NavLink to={"explore"}>explore</NavLink>
      <NavLink to={"my-course"}>my-course</NavLink>
    </div>
  );
};

export default Nav;
