/* eslint-disable react/prop-types */
import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import dataContext from "../../datacontext/datacontext";
import { toast } from "keep-react";


function ProductList({data , handelPrice}) {
    const {product_title,
        product_image,
        price,
        Specification,
        product_id
    }= data

    const {AddtoCart ,setAddtoCart} = useContext(dataContext)

   const handelDelete=(id)=>{
   const updatedlist = AddtoCart.filter(item=>item.product_id !== id)
        setAddtoCart(updatedlist)
        localStorage.setItem('AddtoCart', JSON.stringify([...updatedlist]))

        toast.info(`${product_title} product removed from cart`)
    handelPrice(price)

}     
  return (



    <>
      <div className=" md:flex py-3 px-4 bg-slate-100 my-4 rounded-xl">

        <div className=" md:w-[15%]  ">
          <img className=" mx-auto w-32 rounded-lg" src={product_image} alt={product_title} />
        </div>

        <div className="flex md:w-[80%] gap-2 mt-3  justify-between items-center ">
          <div className="space-y-2  ">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p className="font-semibold text-sm ">{Specification}</p>
            <span className="text-base font-bold">Price:$ {price}</span>
            
            
          </div>

          <div>
            <button onClick={()=>handelDelete(product_id)}>
                <HiOutlineX className=" text-red-500 text-4xl border border-red-400 rounded-full p-2 hover:bg-red-100" />
            </button>
            
          </div>
        </div>

      </div>
    </>
  );
}

export default ProductList;
