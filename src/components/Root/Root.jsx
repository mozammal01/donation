import { Outlet } from "react-router-dom";
// import Home from "../Home/Home";
import Navber from "../Navber/Navber"

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      {/* <Home></Home> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;