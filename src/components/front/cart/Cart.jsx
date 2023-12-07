import React from 'react';
import './cart.css';

function Cart({ cartItems, handleAddProduct, handleRemoveProduct }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
    );
    // let result =  cartItems.map((item)=>{
    //   return {...item,total:parseInt(item.quantity *item.price)}
    // })

  return (
    <>
      <div className="cart-items">
        <div className="cart-items-header">cart items</div>

        {cartItems?.length === 0 && (
          <div className="cart-item-empty">no items are added</div>
        )}

        <div>
          {cartItems?.map((item) => (
            <div key={item.id} className="cart-items-list">
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
              />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-function">
                <button
                  className="cart-items-add"
                  onClick={() => handleAddProduct(item)} // Pass the entire product item
                >
                  +
                </button>
                <button
                  className="cart-items-remove"
                  onClick={() => handleRemoveProduct(item)} // Pass the entire product item
                >
                  -
                </button>
              </div>

              <div className="cart-item-price">
               {/* {item.total} */}
               {item.quantity * item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="total-items-total-price-name">
          total price
          <div className="cart-items-total-price">${totalPrice} </div>
        </div>
      </div>
    </>
  );
}

export default Cart;