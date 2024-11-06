import { useContext, useEffect, useState } from "react";
import dataContext from "../datacontext/datacontext";
import { TbSortAscending2 } from "react-icons/tb";
import ProductList from "../Components/productlist/ProductList";
import Wishlist from "../Components/wishList/WishList";
import { DocumentTitle } from "../pages";
import modalIMG from '../assets/Group.png'
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const {total , setTotal, AddtoCart, wishlist,setAddtoCart} = useContext(dataContext);
  const [btn, setBtn] = useState(true);
 const navigate = useNavigate()
 DocumentTitle("Dashboard | Gadget Heaven")



  const handelbtn = (data) => {
    if (data === "Cart") {
      setBtn(true);
    } else if (data === "Wishlist") {
      setBtn(false);
    }
  };

  const handelPrice = (price) => {
    setTotal(total - price);
  };

  const handelsort = () => {
    const copyarr = [...AddtoCart];
       copyarr.sort((a ,b)=> b.price - a.price)
       setAddtoCart(copyarr)
       console.log(copyarr)
  
  }

  const handelpuces = () => {
    localStorage.removeItem("AddtoCart");
    setAddtoCart([]);
    navigate('/')
  }

  useEffect(() => {

    setTotal( AddtoCart.reduce((acc, curr) => acc + curr.price, 0))

  }, [AddtoCart , setTotal]);

  return (
    <>
      <div className=" text-center container mx-auto bg-[#9538e2] text-white">
        <div className=" md:w-1/2 p-2 mx-auto">
          <h1 className="text-3xl font-bold p-2">Dashboard</h1>
          <p>
            Explore your dashboard with cart and wishList option you can purchase and sort your products by price and see your toatl price also delete product from cart.
          </p>
          <div className="flex gap-4 items-center justify-center py-5">
            <button
              onClick={() => handelbtn("Cart")}
              className={`py-2 px-3 ${
                btn
                  ? "bg-white text-[rgb(149,56,226)]"
                  : "text-white bg-transparent border border-white"
              }  w-24 font-semibold
          rounded-full`}
            >
              Cart
            </button>
            <button
              onClick={() => handelbtn("Wishlist")}
              className={`py-2 px-3  w-24 font-semibold  ${
                btn
                  ? "text-white bg-transparent border border-white"
                  : "bg-white text-[rgb(149,56,226)]"
              } rounded-full`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className=" container mx-auto">
        <div className="flex justify-between my-5 px-1  ">
          <h1 className=" text-xl md:text-2xl font-bold"> {btn ? "Cart" : "WishList"} </h1>
          <div className="flex items-center  gap-1 md:gap-5 ">
            {btn ? (
              <>
                <h1 className=" text-sm md:text-xl text-center font-bold ">
                Total cost: { parseFloat(total).toFixed(2) }
                </h1>
                <button onClick={handelsort} className="flex gap-1 font-semibold items-center border border-purple-500 text-purple-500 rounded-full text-xs  md:text-base py-1 px-1 md:px-3">
                  Sort by Price <TbSortAscending2 className="text-3xl" />
                </button>
                <button disabled={total<= 0} onClick={()=>document.getElementById('my_modal_5').showModal()} className={`py-1 px-3 ${total <= 0 ?'disabled:opacity-50 cursor-not-allowed': ''} rounded-full font-semibold  bg-gradient-to-l from-[#862eda]  via-[#e45de4] to-[#a33de4] text-white `}>
                  Purchase
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        {btn ? (
          <>
            {" "}
            {AddtoCart.length > 0 ? (
              AddtoCart.map((data, index) => (
                <ProductList
                  key={index}
                  handelPrice={handelPrice}
                  data={data}
                />
              ))
            ) : (
              <h1 className="text-center text-xl font-semibold text-rose-500">
                
                no product added yet in cart !
              </h1>
            )}
          </>
        ) : (
          <>
            {wishlist.length > 0
              ? wishlist.map((data) => (
                  <Wishlist key={data.product_id} data={data} />
                ))
              : <h1 className="text-center text-xl font-semibold text-rose-500">
                
              no product added wishList !
            </h1>}
          </>
        )}
      </div>


{/* modal */}
{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <img src={modalIMG} className=" mx-auto font-bold text-lg" />
    <p className="py-4 text-xl text-center font-bold">Payment Successfully</p>
     <div className="text-center">
      <p>Thanks for purchasing.</p>
       <h2>Total: {total}</h2>
     </div>
    {/* <div className="modal-action "> */}
      <form method="dialog ">
        {/* if there is a button in form, it will close the modal */}
        <button to= '/' onClick={handelpuces} className="btn w-full rounded-full my-5 ">Close</button>
      </form>
    {/* </div> */}
  </div>
</dialog>

    </>
  );
}

export default Dashboard;
