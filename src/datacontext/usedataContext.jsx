import { useState } from "react";
import userContext from "./datacontext";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children})=>{
    const [datas, setDatas] = useState(()=>{
        const mainData = localStorage.getItem("Datas");
        return mainData? JSON.parse(mainData) : []
    })

    
    const [wishlist, setWishlist] = useState(()=>{
        const list = localStorage.getItem('wishlist')
        return list? JSON.parse(list) : []
    })

    const [AddtoCart, setAddtoCart] = useState(()=>{
        const cartdata = localStorage.getItem('AddtoCart')
        return cartdata? JSON.parse(cartdata) : []
    })

    const [total , setTotal] = useState(0)


    return(
        <userContext.Provider value={ {total , setTotal, datas, setDatas,wishlist, setWishlist,AddtoCart, setAddtoCart}}>
            {children}
        </userContext.Provider>
    )

}

export default ContextProvider;