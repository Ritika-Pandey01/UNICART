import Modal from "../UI/Modal";
import { Fragment, useState } from "react";

function Cart({ Itemcount }) {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(previousValue => !previousValue);
    }
    return (
        <Fragment>
            <button onClick={handleModal}><li><img src={"assets/shopping-cart.png"}></img>
                <span className='badge badge-warning' id='lblCartCount'> {Itemcount}</span>
            </li></button>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                Itemcount > 0 ?

                                    <div className="checkout-modal_list-item">
                                        <div className="img-wrap">
                                            <img src={"assets/image1.png"} alt="Placeholder"/>

                                        </div>

                                        <div className="information">
                                            <div >
                                                <h4>Title</h4>
                                                <div className="prices">
                                                    <span className="pricing">2000</span>
                                                    <small className="pricing-small"><strike>2500</strike></small>
                                                </div>
                                            </div>
                                            <div className="cart-addon cart-addon_modal">
                                                <button className="subButton">-</button>
                                                <span className="counter">{0}</span>
                                                <button className="addButton">+</button>
                                            </div>

                                        </div>
                                    </div>
                                    :
                                    <div className="empty-cart">
                                        Your cart is empty
                                    </div>
                            }

                        </div>
                        {
                            Itemcount > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h5>Total Amount : </h5>
                                    <h5> 2000 INR</h5>
                                </div>
                                <button>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
        </Fragment>);
}
export default Cart;