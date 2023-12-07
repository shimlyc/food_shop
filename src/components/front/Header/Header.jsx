import { Link } from "react-router-dom"
import "./Header.css"
function Header({cartItems}) {
    return (
        <>
            <header className="header">
                <div>
                    <h1>
                        <Link to="/" className="logo">
                            Dessert shop
                        </Link>
                    </h1>
                </div>
                <div className="header-links">
<ul>
    <li>
        <Link to="/" >Home</Link>
    </li>
</ul>
<ul>
    <li>
        <Link to="/signup" >Sign up</Link>
    </li>
</ul>
<ul>
    <li>
        <Link to="/cart" className="cart" >
        <i className="fa-solid fa-cart-shopping"/>
        <span className="cart-length">
            {cartItems?.length===0 ? "0" :cartItems?.length}
        </span>
        </Link>
    </li>
</ul>

                </div>
            </header>




        </>
    )
}
export default Header