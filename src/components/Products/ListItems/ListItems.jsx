import React, { Fragment, useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Modal from "../../UI/Modal";
import { useSelector,useDispatch } from "react-redux";
import { addItemHandler,removeItemHandler } from "../../../actions";
function ListItems({ data }) {
    const [showModal, setShowModal] = useState(false);
   const item= useSelector(state=>state.items.find(item=>item.id===data.id))
   const dispatch=useDispatch();

    const increasePointer = event => {
        event.stopPropagation();
        dispatch(addItemHandler(data))
    }
    const decreasePointer = event => {
        event.stopPropagation();
        dispatch( removeItemHandler(data.id))
        
    }

    
    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }

    return (
        <Fragment>
            <div className="item-card" onClick={handleModal}>
                <img className="image-fluid" src={"assets/" + data.thumbnail} alt="Title"></img>
                <div className="item-card_info">
                    <div className="title">
                        <h5 className="titlePlaceholder">{data.title}</h5>
                    </div>
                    <div className="prices">
                        <span className="pricing">₹{data.discountedPrice}&nbsp;</span>
                        <small className="pricing-small">
                            <strike>₹{data.price}</strike>
                        </small>

                        <button className="wishItems" ><span><FavoriteBorderOutlinedIcon fontSize="small" /></span></button>

                    </div>

                </div>

                {
                    !item ||item?.quantity < 1 ?
                        <button className="buttonTag" variant="contained" onClick={increasePointer}>
                            <span className="add-item">Add to cart&nbsp;</span>
                            <ShoppingCartIcon />
                        </button>
                        :
                        <div className="cart-addon">
                            <button className="button-cart" onClick={decreasePointer}><span><RemoveIcon fontSize="small" /></span></button>
                            <span className="counter">{item.quantity}</span>
                            <button className="button-cart" onClick={increasePointer}><span><AddIcon fontSize="small" /></span></button>
                        </div>
                }
            </div>
            {showModal && <Modal onClose={handleModal}>
                <div className="item-card_modal">
                    <div className="img-wrap">
                        <img className="image-fluid_modal" src={"assets/" + data.thumbnail} alt="Title"></img>
                    </div>
                    <div className="meta">
                        <h3>{data.title}</h3>

                        <div className="prices">
                            <span className="pricing">₹{data.price}&nbsp;</span>
                            <small className="pricing-small">
                                <strike>₹{data.discountedPrice}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                            !item ||item?.quantity < 1 ?
                                <button className="buttonTag buttonTag_modal" variant="contained" onClick={increasePointer}>
                                    <span className="add-item">Add to cart&nbsp;</span>
                                    <ShoppingCartIcon />
                                </button>
                                :
                                <div className="cart-addon cart-addon_modal">
                                    <button className="button-cart" onClick={decreasePointer}><span><RemoveIcon fontSize="small" /></span></button>
                                    <span className="counter">{item.quantity}</span>
                                    <button className="button-cart" onClick={increasePointer}><span><AddIcon fontSize="small" /></span></button>
                                </div>
                        }
                    </div>
                </div>
            </Modal>}
        </Fragment>
    );
}
export default ListItems;