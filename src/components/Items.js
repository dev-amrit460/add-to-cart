import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="cart-item">
        <div className="order-detail">
          <div className="order-detail-img">
            <img src={img} alt="iamge" />
          </div>
          <div className="order-detail-text">
            <h3>{title}</h3>
          </div>
          <div className="order-detail-del">
            <i
              className="fas fa-times"
              onClick={() => removeItem(id)}
            ></i>
          </div>
        </div>
        <div className="order-qty">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <div className="qnt" >{quantity}  </div>
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>

        </div>
        <div className="order-price">
          <h3>${price}</h3>
        </div>
      </div>
    </>
  );
};

export default Items;
