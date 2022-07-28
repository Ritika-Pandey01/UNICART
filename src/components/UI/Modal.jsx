import { Backdrop } from "./Loader";
import { Children, Fragment } from "react";
import ReactDOM  from "react-dom";



function Modal({onClose,children}){
return(
    <Fragment>
    {
        ReactDOM.createPortal(
            <Fragment>
            <Backdrop onClose={onClose}/>
                <div className="modalContent">
                <button type="close" onClick={onClose}>x</button>
                <div className="content">{children}</div>
                </div>
            </Fragment>
            ,document.getElementById("modal-root")
        )
    }
    </Fragment>
);
}

export default Modal;