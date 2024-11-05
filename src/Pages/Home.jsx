import banner from "../assets/banner.jpg";
import { useState, useEffect, useContext } from "react";
import Products from "../Components/Products/Products";

import dataContext from "../datacontext/datacontext";
import { Link } from "react-router-dom";
import { DocumentTitle, setLocalDb } from "../pages";

function Home() {
  const [data, setData] = useState([]);
  const [selecet, setSelecet] = useState([]);
  const {setDatas ,datas} = useContext(dataContext)

  DocumentTitle("Home | Gadget Heaven")

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) =>(setData(data),setLocalDb(data), setDatas(data)));
      setSelecet( datas )
  },[]);


  const handelProducts = (category = datas) => {
    console.log(datas);
    if (category === "all") {
      setSelecet(datas);
    } else if (category === "iPhone") {
      const iphone = datas.filter((iph) => iph.product_title.includes(category));
      setSelecet(iphone);
    } else {
      const newData = datas.filter((data) => data.category === category);
      setSelecet(newData);
    }
  };

  return (
    <div>
      <div className="bg-[#9538e2] w-[98%] rounded-b left-1/2 -translate-x-1/2  h-[80vh] absolute top-0  -z-10"></div>

      <div className=" text-center  md:w-4/6 mx-auto space-y-5 mt-6 text-white ">
        <h1 className=" text-lg px-2 md:text-5xl font-bold ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className=" text-sm md:text-base w-[90%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to='Dashboard' >
        <button className="bg-white mt-5 rounded-full py-3 px-5 text-[#9538E2] font-semibold">
          Shop Now
        </button>
          
        </Link>
      </div>

      <div className=" backdrop-blur-sm w-10/12 md:w-1/2  mx-auto p-5 mt-5  bg-white/30 border rounded-3xl">
        <img src={banner} alt="" className=" w-full rounded-2xl" />
      </div>
      <div className="mt-8 container mx-auto">
        <h1 className="text-center text-xl  md:text-3xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className=" md:flex gap-10 mt-5">
          <div className="bg-base-200 md:w-[20%] h-fit p-5 rounded-md text-center">
            <ul className="flex flex-col space-y-4   ">
              <button className="bg-white py-2 rounded-full focus:bg-violet-500 focus:text-white" onClick={() => handelProducts("all")}>
                
                All Product
              </button>
              <button  className="bg-white py-2 rounded-full focus:bg-violet-500 focus:text-white" onClick={() => handelProducts("Computers")}>
                Laptops
              </button>
              <button className="bg-white py-2 rounded-full focus:bg-violet-500 focus:text-white" onClick={() => handelProducts("Accessories")}>
                Accessories
              </button>
              <button className="bg-white py-2 rounded-full focus:bg-violet-500 focus:text-white" onClick={() => handelProducts("iPhone")}> iPhone</button>
              <button className="bg-white py-2 rounded-full focus:bg-violet-500 focus:text-white" onClick={() => handelProducts("Phones")}> phone</button>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg md:w-[75%]  p-5 ">
            <Products data={data} selecet={selecet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
