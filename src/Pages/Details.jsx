import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataContext from "../datacontext/datacontext";
import Rating from "../Components/Rating/Rating";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
// import { toast } from 'keep-react'
import { DocumentTitle } from "../pages";
import { toast } from 'sonner';
function Details() {
  const { id } = useParams();
  const { total, setTotal, datas , wishlist,setAddtoCart,AddtoCart,setWishlist } = useContext(dataContext);
  const [Details, setDetails] = useState("");
 const [isDisabled, setIsDisabled] = useState(false)
console.log(isDisabled)
  useEffect(() => {
    setTotal(AddtoCart.reduce((acc, curr) => acc + curr.price, 0));
  }, [AddtoCart, setTotal]);


  const {
    product_title,
    product_image,
    price,
    availability,
    Specification,
    description,
    rating,
  } = Details;


  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  },[wishlist])

  useEffect(() => {
    localStorage.setItem('AddtoCart', JSON.stringify(AddtoCart))
  },[AddtoCart])


  DocumentTitle("Details | Gadget Heaven")



  const handelWishlist = (wishData)=>{
    
      if( !wishlist.some(itme => itme.product_id === wishData.product_id)){
        setWishlist([...wishlist, wishData])
        toast.success(`${wishData.product_title}  added to wishlist`)
        
      }else{
        
        toast.warning('already added this in your wishlist')
      }
      setIsDisabled(true)

      
        
  }
  const handelAddToCart = (cart)=>{
    if(total + cart.price <= 1000){
       setAddtoCart([...AddtoCart, cart])
    toast.success(`${cart.product_title} added to Cart`)
    }else{
       toast.error('Total amount exceeds $1000')
       return;
    }
  
    
  }


  useEffect(() => {
    const newdata = datas.find((data) => data.product_id === id);
    setDetails(newdata || []);
  }, [datas , id]);
 
  return (
    <div className=" relative  lg:bg-slate-100 z-20 py-10">
      <div className=" absolute rounded-b left-1/2  -translate-x-1/2  top-0  w-full -z-10 container mx-auto  bg-[#9538e2] h-[80vh] md:h-[40vh]"></div>

      <div className="text-white text-center space-y-4 pt-4 px-2 md:w-1/2 mx-auto">
        <h1 className="text-2xl font-bold ">Product Details</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className=" md:w-[80%] mx-auto shadow  md:flex gap-5 bg-white p-5 border rounded-2xl mt-5">
        <div className="bg-base-200 h-fit p-5 rounded-lg">
          <img className="rounded-lg md:w-60" src={product_image} alt="" />
        </div>
        <div className=" space-y-3">
          <h1 className=" text-2xl font-bold">{product_title}</h1>
          <h2 className=" font-semibold text-slate-500">price:${price} </h2>
          <button className={` ${availability? 'bg-[#eaf5e6]  border-[#2f9c08e4] text-[#2f9c08e4]': 'bg-red-100 border-red-500 text-red-500'} py-2 rounded-full px-4 font-semibold border`}>
            {availability ? "In Stock" : "Out of Stock"}
          </button>
          <p>{description}</p>
          <div> <span className="text-lg font-semibold">Specification:</span> {
           Array.isArray(Specification) &&  Specification.map((item,index) =>{ return <p key={item}>{index + 1}. {item}</p>})

            }
            </div>
          <h1 className=" text-xl font-semibold"> Rating:</h1> 
            <div className=" space-x-3">
              <Rating rating={rating}></Rating>
            <span className="py-1 px-3 rounded-full bg-slate-200">
             
            {rating}
            </span>
            </div>
            
          
          <div className="flex gap-5 items-center ">
            <Link
              className="py-2 px-3 bg-[#8d36d6] flex items-center justify-center rounded-full text-white font-semibold"
              onClick={()=>handelAddToCart(Details)}
            >
              Add to card
              <IoCartOutline className=" text-4xl p-2 " />
            </Link>
            <button disabled={isDisabled} className={` hover:scale-125 transition rounded-full focus:text-green-900 ${isDisabled? "disabled:opacity-50 cursor-not-allowed": ''}  focus:bg-green-100`}>
              <CiHeart onClick={()=>handelWishlist(Details)} className="border  focus:bg-orange-400 rounded-full text-4xl font-bold  p-2 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
