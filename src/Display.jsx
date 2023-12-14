import { useContext } from "react"
import Cart from "./Cart"
import { AppContext } from "./App"

const Display = ()=>{



    const {cart} = useContext(AppContext)


    console.log(cart);
   
    return(
        <>
        
        
        
            {
                cart.map((item)=>{
                    return(
                        <p>{item.name}</p>
                    )
                })
            }
        </>
    )
}

export default Display