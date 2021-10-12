import React from "react";
import FooterView from "./view/FooterView";

const Footer = ({watchCart, totalPrice, countProduct}) => {
    return (
       <FooterView 
            watchCart={watchCart}
            totalPrice={totalPrice}
            countProduct={countProduct}
       />
    )
}

export default Footer