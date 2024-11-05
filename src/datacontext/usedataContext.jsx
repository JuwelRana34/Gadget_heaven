import { useState } from "react";
import userContext from "./datacontext";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children})=>{
    const [datas, setDatas] = useState([])

    
    const [wishlist, setWishlist] = useState(()=>{
        const list = localStorage.getItem('wishlist')
        return list? JSON.parse(list) : []
    })

    const [AddtoCart, setAddtoCart] = useState(()=>{
        const cartdata = localStorage.getItem('AddtoCart')
        return cartdata? JSON.parse(cartdata) : []
    })

    return(
        <userContext.Provider value={ {datas, setDatas,wishlist, setWishlist,AddtoCart, setAddtoCart}}>
            {children}
        </userContext.Provider>
    )

}

export default ContextProvider;