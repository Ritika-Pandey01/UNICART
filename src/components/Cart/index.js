import Modal from "../UI/Modal";
import { Fragment, useState } from "react";
import CartItem from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";
import { useSelector,useDispatch } from "react-redux";
import { addItemHandler, clearCartHandler, removeItemHandler } from "../../actions";
function Cart() {
    const [showModal, setShowModal] = useState(false);
    const [orderModal,setOrderModal]=useState(false); 
    const items= useSelector(state=>state.items)
    const totalAmount=useSelector(state=>state.totalAmount)
    const dispatch=useDispatch()

    const handleModal = () => {
        setShowModal(previousValue => !previousValue);
    }
    const handleOrderModal=()=>{
        setShowModal(false);
        dispatch(clearCartHandler())
        setOrderModal(previousValue=>!previousValue);
    }
    const dispatchEvents=(type,item)=>{
        if(type===1){
            dispatch(addItemHandler(item))
        }
        else if(type===-1){
            dispatch(removeItemHandler(item.id))
        }

    }


    return (
        <Fragment>
            <button onClick={handleModal}>
            <li><img src={"assets/shopping-cart.png"}></img>
                <span className='badge badge-warning' id='lblCartCount'> {items.length}</span></li></button>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items.length > 0 ?

                                    items.map(item => {
                                        return (
                                            <CartItem 
                                            data={item}
                                             key={item.id}
                                             onEmitDecreaseItem={item=>dispatchEvents(-1,item)}
                                             onEmitIncreaseItem={item=>dispatchEvents(1,item)}/>
                                             )

                                    })
                                    :
                                    <div className="empty-cart">
                                        Your cart is empty
                                    </div>
                            }

                        </div>
                        {
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h5>Total Amount : </h5>
                                    <h5>
                                    <span style={{margin:"0px 4px"}}>₹</span>
                                    {totalAmount}
                                    </h5>
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