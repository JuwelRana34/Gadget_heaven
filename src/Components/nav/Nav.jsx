import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import dataContext from "../../datacontext/datacontext";
function Nav() {
  const { pathname } = useLocation();
  const { wishlist, AddtoCart } = useContext(dataContext);

  const handelActive = ({ isActive }) =>(
    isActive
      ? "bg-neutral rounded text-base-300"
      : pathname === "/" || pathname === '/All-Products' || pathname === '/Laptops' || pathname === '/Phones' || pathname === '/Accessories' || pathname === '/Smart-Watches' || pathname === '/Iphone'
      ? "md:text-white"
      : "")

  return (
    <div className=" mt-4">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${pathname === "/" || pathname === '/All-Products' || pathname === '/Laptops' || pathname === '/Phones' || pathname === '/Accessories' || pathname === '/Smart-Watches' || pathname === '/Iphone'?"text-white":''} `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={` menu menu-sm dropdown-content bg-base-100  rounded-box z-[100] mt-3 w-52 p-2 shadow`}
            >
              <NavLink className={handelActive} to="/">
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink className={handelActive} to="Statistics">
                <li>
                  <a>Statistics</a>
                </li>
              </NavLink>
              <NavLink className={handelActive} to="Dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </NavLink>
              <NavLink className={handelActive} to="Contact">
                <li>
                  <a>Contact</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <Link to="/"
            className={`btn btn-ghost text-xl ${
              pathname === "/" || pathname === '/All-Products' || pathname === '/Laptops' || pathname === '/Phones' || pathname === '/Accessories' || pathname === '/Smart-Watches' || pathname === '/Iphone' ? "text-white" : ""
            }`}
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md font-semibold">
            <NavLink className={handelActive} to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink className={handelActive} to="Statistics">
              <li>
                <a>Statistics</a>
              </li>
            </NavLink>
            <NavLink className={handelActive} to="Dashboard">
              <li>
                <a>Dashboard</a>
              </li>
            </NavLink>
            <NavLink className={handelActive} to="Contact">
              <li>
                <a>Contact</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-2 ">
          <Link to='Dashboard'>
          <div className=" relative">
            <IoCartOutline className="border rounded-full text-4xl p-2 bg-white" />
            {AddtoCart.length > 0 && (
              <p className=" absolute -top-[6px] -right-[7px] p-1 text-white flex items-center justify-center  rounded-full h-5 w-5 bg-lime-500 ">
                {AddtoCart.length}
              </p>
            )}
          </div>
          </Link>

            <Link to='Dashboard'>
          <div className=" relative">
            <CiHeart className="border rounded-full text-4xl p-2 bg-white" />
            {wishlist.length > 0 && (
              <p className=" absolute -top-[6px] -right-[7px] p-1 text-white flex items-center justify-center  rounded-full h-5 w-5 bg-green-500 ">
                {wishlist.length}
              </p>
            )}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
