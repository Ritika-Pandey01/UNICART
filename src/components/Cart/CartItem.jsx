import React from "react";
const CartItem = ({ data,onEmitDecreaseItem,onEmitIncreaseItem }) => {
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img src={`assets/${data.thumbnail}`} alt={data.title} />

            </div>

            <div className="information">
                <div >
                    <h4>{data.title}</h4>
                    <div className="prices">
                        <span className="pricing">₹{data.discountedPrice}</span>
                        <small className="pricing-small"><strike>₹</strike>{data.price}</small>
                    </div>
                </div>
                <div className="cart-addon cart-addon_modal">
                    <button className="subButton_modal" onClick={()=>onEmitDecreaseItem(data)}>-</button>
                    <span className="counter_modal">{data.quantity}</span>
                    <button className="addButton_modal" onClick={()=>onEmitIncreaseItem(data)}>+</button>
                </div>

            </div>
        </div>
    );
}
export default CartItem;