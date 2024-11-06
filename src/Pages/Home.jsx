import banner from "../assets/banner.jpg";
import { useEffect, useContext } from "react";

import dataContext from "../datacontext/datacontext";
import { Link, NavLink, Outlet } from "react-router-dom";
import { DocumentTitle, setLocalDb } from "../pages";

function Home() {



  const { setDatas, datas } = useContext(dataContext);
  const categorys = [
    "All-Products",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart-Watches",
    "Iphone",
  ];
  DocumentTitle("Home | Gadget Heaven");

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => (setLocalDb(data), setDatas(data)));
  }, [datas, setDatas]);

  return (
    <div>
      <div className="bg-[#9538e2] w-[98%]  left-1/2 -translate-x-1/2  h-[80vh] absolute top-3 rounded-md  -z-10"></div>

      <div className=" text-center  md:w-4/6 mx-auto space-y-5 mt-6 text-white ">
        <h1 className=" text-lg px-2 md:text-5xl font-bold ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className=" text-xs md:text-base w-[90%] mx-auto">
        Transform your tech experience with Gadget Heaven Accessories!. Explore our collection to find the perfect companions for your need. Accessorize with Gadget Heaven and take your tech to the next level!
        </p>
        <Link to="Dashboard">
          <button className="bg-white mt-5 rounded-full py-3 px-5 text-[#9538E2] font-semibold">
            Shop Now
          </button>
        </Link>
      </div>

      <div className=" backdrop-blur-sm w-10/12 md:w-1/2  mx-auto p-5 mt-5  bg-white/30 border rounded-3xl">
        <img src={banner} alt="" className=" w-full rounded-2xl" />
      </div>

      {/* ********************************** */}

      <div className="mt-8 container mx-auto">
        <h1 className="text-center text-xl  md:text-3xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className=" md:flex gap-10 mt-5">
          <div className="bg-base-200  shadow-md md:w-[20%] h-fit p-5 rounded-md text-center">
            <ul className="flex flex-col space-y-4">
              {categorys.map((category, index) => (
                <NavLink
                  to={`/${category}`}
                  key={index}
                  className={`bg-white py-2 rounded-full  focus:bg-violet-500 focus:text-white`}
                >
                  {category}
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg md:w-[75%]  p-5 ">
            <Outlet />
          </div>
        </div>
      </div>

      {/* ******************************************** */}
    </div>
  );
}

export default Home;
