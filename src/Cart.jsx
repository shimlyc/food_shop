import { useContext } from "react"
import { AppContext } from "./App"
import Display from "./Display"

function Cart({items}) {

    const {addtocart} = useContext(AppContext)

    const { id,name,price,image} = items



  return (
 <>

 <div className="">
    <p>{name}</p>
    <p>{price}</p>
    <p>{id}</p>
    <button onClick={()=>addtocart(items)}>ADD TO CART</button>
 </div>


 
 
 </>
  )
}

export default Cart
