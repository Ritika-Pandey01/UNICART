import Modal from "../UI/Modal";
import { Fragment, useState } from "react";
import CartItem from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";
function Cart({ Itemcount, items,onHandleEvent }) {
    const [showModal, setShowModal] = useState(false);
    const [orderModal,setOrderModal]=useState(false); 
    const handleModal = () => {
        setShowModal(previousValue => !previousValue);
    }
    const handleOrderModal=()=>{
        setShowModal(false);
        setOrderModal(previousValue=>!previousValue);
    }
    return (
        <Fragment>
            <button onClick={handleModal}>
            <li><img src={"assets/shopping-cart.png"}></img>
                <span className='badge badge-warning' id='lblCartCount'> {Itemcount}</span></li></button>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                Itemcount > 0 ?

                                    items.map(item => {
                                        return (
                                            <CartItem 
                                            data={item}
                                             key={item.id}
                                             onEmitDecreaseItem={id=>onHandleEvent(id,-1)}
                                             onEmitIncreaseItem={id=>onHandleEvent(id,1)}/>
                                             )

                                    })
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
                                    <h5>
                                    <span style={{margin:"0px 4px"}}>₹</span>
                                    {
                                        items.reduce((previous, current) => {
                                            return previous + (current.discountedPrice * current.quantity)
                                        }, 0)
                                    }</h5>
                                </div>
                                <button onClick={handleOrderModal}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {
                orderModal && <OrderSuccess onClose={handleOrderModal}/>
            }
        </Fragment>);
}
export default Cart;