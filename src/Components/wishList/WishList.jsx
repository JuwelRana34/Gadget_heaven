/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import dataContext from "../../datacontext/datacontext";
import { toast } from "keep-react";


function Wishlist({data}) {
 

    const {product_title,
        product_image,
        price,
        Specification,
        product_id
    }= data

    const {datas,setDatas,AddtoCart, wishlist, setWishlist ,setAddtoCart} = useContext(dataContext)

   const handelWishDelete=(id)=>{
    const afterdeleteWishlist = wishlist.filter(item=>item.product_id !== id)
    setWishlist(afterdeleteWishlist)
    localStorage.setItem('wishlist', JSON.stringify([...afterdeleteWishlist]))
        toast.info(`${product_title} product removed from cart`)
    

}  

useEffect(()=>{
    fetch('data.json')
     .then(response=>response.json())
     .then(data=>setDatas(data))
},[])

const handelAddToCart = (cart)=>{

    const product = datas.find(data=> data.product_id === cart)
    console.log(product)
    setAddtoCart([...AddtoCart, product])
localStorage.setItem('AddtoCart', JSON.stringify([...AddtoCart, product]))

    const updateWishList = wishlist.filter(list => list.product_id !== cart)

    localStorage.setItem('wishlist', JSON.stringify(updateWishList))
     setWishlist(updateWishList)
     
    toast.success(`${product.product_title} added to Cart`)
  }



  return (



    <>
      <div className=" md:flex py-3 px-4 bg-slate-100 my-4 rounded-xl">

        <div className=" md:w-[15%]  ">
          <img className="w-32 mx-auto rounded-lg" src={product_image} alt={product_title} />
        </div>

        <div className="flex  md:w-[80%] gap-2 mt-3  justify-between items-center ">
          <div className=" space-y-1">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p className="font-semibold text-sm md:text-base ">Description: {Specification}</p>
            <span className="text-base font-bold">Price:$ {price}</span>
            <br />
            <button onClick={()=>handelAddToCart(product_id)} className="bg-purple-600 py-1 px-3 rounded-full text-white font-semibold"> Add to Card</button>
            
          </div>

          <div>
            <button onClick={()=>handelWishDelete(product_id)}>
                <HiOutlineX className={` text-red-500 text-4xl border border-red-400 rounded-full p-2 hover:bg-red-100`} />
            </button>
            
          </div>
        </div>

      </div>
    </>
  );
}

export default Wishlist;
