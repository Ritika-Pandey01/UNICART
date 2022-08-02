import Modal from "../UI/Modal";
import React from "react";

const OrderSuccess=({onClose})=>{
    return(
        <Modal onClose={onClose}>
            <div className="order-container">
            <div className="order-container--success">
            <img src={"assets/order.gif"} alt="Success" className="img-fluid"/>
            <div className="message">
            <h1>Order successfully placed!!</h1>
            <span>OrderID #{Math.random().toString(32).slice(2)}</span>
            </div>

            </div>

            </div>
        </Modal>
    );
}
export default OrderSuccess;