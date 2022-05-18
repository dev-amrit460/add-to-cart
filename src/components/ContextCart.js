import React, { useContext } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount, totalDis } = useContext(CartContext);

  return (
    <>
      <div className="header">
        <h1><i class="fas fa-chevron-left" aria-hidden="true"> </i> shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

      </div>
      <div className="cart-container">
        <div className="order">
          <hr/>
          <div>
            <div className="cart-item">
              <div className="order-detail" id="one">
                <h3>Item({totalItem})</h3>
              </div>
              <div className="order-qty">
                <h3>Qty</h3>

              </div>
              <div className="order-price">
                <h3>price</h3>
              </div>
            </div>
          </div>
          <hr/>
          {item.map((curItem) => {
            return <Items key={curItem.id} {...curItem} />;
          })}


        </div>
        <div className="checkout">
          <div className="checkout-top">
            <h2>Cart Total</h2>
            <div className="total">
              <span>Item({totalItem}):</span> <span>${totalAmount}</span>
            </div>
            <div className="total">
              <span>Discount:</span> <span>-${totalDis}</span>
            </div>

          </div>
          <div className="checkout-bottom">
            
          <div className="total">
              <span>Total :</span> <span>${totalAmount-totalDis}</span>
            </div>
          </div>
          <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
        </div>
      </div>
    </>
  );
};

export default ContextCart;
