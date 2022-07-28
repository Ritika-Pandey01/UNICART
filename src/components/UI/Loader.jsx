import React from "react";
import ReactDom from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

export const Backdrop=(props)=>{
    const handleClick=()=>{
        if(props.onClose){
            props.onClose();
        }
    }
    return (<div onClick={handleClick} className="loader-overlay"></div>);
}
export function Loader() {
    return (
        ReactDom.createPortal(<>
            <div className="loaderOver">
            <div className="ring" align='center'>
            <Rings height={100} width={100} color="white" />
            </div>
            </div>
        </>,document.getElementById('loader-root'))

    );
}