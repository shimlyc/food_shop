import Product from "../product/Product"
import Signup from "../signup/Signup"

function Routes({productItems}){
    return(
        <>
       <div>

        <Product productItems={productItems}/>
        <Cart />
       </div>
        </>
    )
}










export default Routes 